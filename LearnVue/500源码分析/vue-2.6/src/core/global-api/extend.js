/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { defineComputed, proxy } from '../instance/state'
import { extend, mergeOptions, validateComponentName } from '../util/index'

export function initExtend (Vue: GlobalAPI) {
  // 每个构造器，包括Vue，有一个唯一的cid。
  // 它让我们可以包装子构造器来实现原型继承和缓存
  Vue.cid = 0
  let cid = 1

  /**
   * Vue类继承
   */
  Vue.extend = function (extendOptions: Object): Function {
    extendOptions = extendOptions || {}
    const Super = this
    const SuperId = Super.cid
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
    // 如果该extendOptions执行过对同一个Vue类的扩展，那么将不再重复进行，而是拿过来直接用
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    const name = extendOptions.name || Super.options.name
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name)
    }

    // 创建子类
    const Sub = function VueComponent (options) {
      this._init(options)
    }
    // 子类继承父类，下面两句是继承的常规操作
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    // cid赋值并递增
    Sub.cid = cid++
    // 合并父子options
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
    // 把父类赋到super属性上
    Sub['super'] = Super

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps(Sub)
    }
    if (Sub.options.computed) {
      initComputed(Sub)
    }

    // 把父Vue类的API赋到子类，以允许在子类上使用这些方法做extension/mixin/plugin
    Sub.extend = Super.extend
    Sub.mixin = Super.mixin
    Sub.use = Super.use

    // 创建资源注册器(如Vue.component)，这样扩展的子Vue类也能注册它们私有的资源了
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type]
    })
    // 允许递归自身查找
    if (name) {
      Sub.options.components[name] = Sub
    }

    // 在扩展时保留保留父类options的引用。
    // 在后面实例化时可以检查父类的options是否改变。
    Sub.superOptions = Super.options
    Sub.extendOptions = extendOptions
    Sub.sealedOptions = extend({}, Sub.options)

    // 缓存
    cachedCtors[SuperId] = Sub
    return Sub
  }
}

function initProps (Comp) {
  const props = Comp.options.props
  for (const key in props) {
    proxy(Comp.prototype, `_props`, key)
  }
}

function initComputed (Comp) {
  const computed = Comp.options.computed
  for (const key in computed) {
    defineComputed(Comp.prototype, key, computed[key])
  }
}
