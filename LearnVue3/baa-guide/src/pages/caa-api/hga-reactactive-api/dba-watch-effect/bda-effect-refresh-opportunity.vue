<template>
  <fieldset>
    <h3>副作用刷新时机</h3>
    <div>
      <div>Vue 中维护一个 watchEffect 队列，并异步执行，这样可以避免同一个 tick 中多个状态改变不会重复调用</div>
      <hr />
      <div>在 Vue 核心实现中，组件更新也是一个 watchEffect。用户自定义的 watchEffect 默认会在组件更新之后执行</div>
      <div>如果需要同步或在组件更新之前执行，可以设置 flush 选项为 sync 或 pre，默认为 post。</div>
      <div>注意：初始化的 watchEffect 是在组件 mount 之前执行的，如果此时需要操作 dom，可以使用 onMount 钩子</div>
    </div>
    <div>
      <span ref="countShow">count:{{state.count}}</span>
      <button @click="addCount()">点击</button>
    </div>
  </fieldset>
</template>

<script>
import { ref, reactive, watchEffect } from "vue";

export default {
  name: "bda-effect-refresh-opportunity",
  setup() {
    const countShow = ref(null);

    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }

    watchEffect(() => {
      console.log(
        "effect-refresh-opportunity",
        "post",
        "watchEffect",
        state.count
      );
      if (countShow.value) {
        console.log(countShow.value.innerHTML);
      }
    });

    watchEffect(
      () => {
        console.log(
          "effect-refresh-opportunity",
          "sync",
          "watchEffect",
          state.count
        );
        if (countShow.value) {
          console.log(countShow.value.innerHTML);
        }
      },
      { flush: "sync" }
    );

    watchEffect(
      () => {
        console.log(
          "effect-refresh-opportunity",
          "pre",
          "watchEffect",
          state.count
        );
        if (countShow.value) {
          console.log(countShow.value.innerHTML);
        }
      },
      { flush: "pre" }
    );

    return {
      countShow,
      state,
      addCount,
    };
  },
};
</script>

<style>
</style>
