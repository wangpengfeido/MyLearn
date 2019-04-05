/* @flow */

import {
  warn,
  remove,
  isObject,
  parsePath,
  _Set as Set,
  handleError,
  noop
} from '../util/index'

import { traverse } from './traverse'
import { queueWatcher } from './scheduler'
import Dep, { pushTarget, popTarget } from './dep'

import type { SimpleSet } from '../util/index'

let uid = 0

/**
 * watcher 分析表达式，收集依赖，当表达式值变化时触发回调。
 * 它被用在 $watch api 和 指令
 */
export default class Watcher {
  vm: Component;            // Vue实例
  expression: string;      // 表达式
  cb: Function;
  id: number;
  deep: boolean;
  user: boolean;
  lazy: boolean;            // 选项。关于lazy选项，它是用于computed。
  sync: boolean;
  dirty: boolean;
  active: boolean;
  deps: Array<Dep>;         // watcher订阅的deps
  newDeps: Array<Dep>;     // 收集依赖的中转。在watcher触发getter后的收集依赖中，订阅被存放在new deps中，完成后再转移到deps中
  depIds: SimpleSet;
  newDepIds: SimpleSet;
  before: ?Function;
  getter: Function;         // getter-获取表达式值的方法
  value: any;              // 计算出的表达式的值

  constructor (
    vm: Component,
    expOrFn: string | Function,     // 表达式
    cb: Function,                   // 回调函数。触发更新时执行
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm
    if (isRenderWatcher) {
      vm._watcher = this
    }
    // 当前Watcher添加到vue实例上
    vm._watchers.push(this)
    // options 配置
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user
      this.lazy = !!options.lazy
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.id = ++uid // uid for batching
    this.active = true
    this.dirty = this.lazy // for lazy watchers
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
    // 将表达式转换为getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
      // 当表达式不合法（不能转换为getter），将getter设置为空操作
      if (!this.getter) {
        this.getter = noop
        process.env.NODE_ENV !== 'production' && warn(
          `Failed watching path: "${expOrFn}" ` +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        )
      }
    }
    // 获取到表达式的值
    this.value = this.lazy
      ? undefined
      : this.get()
  }

  /**
   * 求getter的值，重新收集依赖
   * @return 计算出的值
   */
  get () {
    pushTarget(this)        // 将watcher入栈并设置为当前求值watcher
    let value
    const vm = this.vm
    try {
      // 计算值
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()          // 求值完成，watcher出栈，不再是当前watcher
      this.cleanupDeps()  // 清理deps
    }
    return value
  }

  /**
   * 为指令添加一个dep
   * 即使该watcher订阅一个dep
   */
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  /**
   * 收集依赖后的清理。主要是将new deps转移到deps中
   */
  cleanupDeps () {
    // 移除重复添加的依赖
    let i = this.deps.length
    while (i--) {
      const dep = this.deps[i]
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }
    // 将new dep赋给dep，并将new dep清空
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }

  /**
   * 订阅接口。
   * 当依赖改变时被调用。
   * 即dep会通过它通知watcher数据更新。
   */
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }

  /**
   * 调度工作接口。
   * 被调度器调用。
   * 它会调用回调函数
   */
  run () {
    if (this.active) {
      const value = this.get()
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value
        this.value = value
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue)
          } catch (e) {
            handleError(e, this.vm, `callback for watcher "${this.expression}"`)
          }
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }

  /**
   * Depend on all deps collected by this watcher.
   */
  depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }

  /**
   * Remove self from all dependencies' subscriber list.
   */
  teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this)
      }
      let i = this.deps.length
      while (i--) {
        this.deps[i].removeSub(this)
      }
      this.active = false
    }
  }
}
