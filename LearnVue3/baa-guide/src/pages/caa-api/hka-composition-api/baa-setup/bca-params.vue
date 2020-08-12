<template>
  <fieldset>
    <h3>参数</h3>
    <div>biggerAInProps：{{state.biggerAInProps.value}}</div>
    <div>
      <button @click="doSth()">do-sth</button>
      <button @click="consoleContext()">consoleContext</button>
    </div>
  </fieldset>
</template>

<script>
import { computed } from "vue";

export default {
  name: "bca-params",
  props: {
    a: {},
  },
  // setup 有两个参数
  // 第一个参数 props，是绑定的属性
  // 第二个参数 context，是上下文对象。包含 context.attrs，context.slots，context.emit
  setup(props, context) {
    const state = {
      biggerAInProps: computed(() => {
        // 使用 props.注意：props不可以解构，否则会失去响应性。
        return props.a.toUpperCase();
      }),
    };

    function doSth() {
      // 触发事件
      context.emit("do-sth");
    }

    function consoleContext() {
      // 定义的普通属性
      console.log("context.attrs.class", context.attrs.class);
      // 定义的slot
      console.log("context.slots.default", context.slots.default);
    }

    return {
      state,
      doSth,
      consoleContext,
    };
  },
};
</script>

<style>
</style>
