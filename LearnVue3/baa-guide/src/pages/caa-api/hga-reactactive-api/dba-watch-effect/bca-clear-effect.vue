<template>
  <fieldset>
    <h3>清除副作用</h3>
    <div>
      <div>有时 watchEffect 中会执行异步操作，这些操作有时需要在失效时清除。例如完成之前状态已经改变</div>
      <div>watchEffect 接收一个 onInvalid 参数，使用它注册失效时回调。它会在以下情况执行：</div>
      <div>1. watchEffect 重新执行</div>
      <div>2. watchEffect 被停止</div>
    </div>
    <div>
      <span>count:</span>
      <button @click="addCount()">{{state.count}}</button>
    </div>
  </fieldset>
</template>

<script>
import { reactive, watchEffect } from "vue";

export default {
  name: "bca-clear-effect",
  setup() {
    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }

    watchEffect((onInvalid) => {
      console.log("watchEffect", state.count);
      onInvalid(() => {
        console.log("onInvalid");
      });
    });

    return {
      state,
      addCount,
    };
  },
};
</script>

<style>
</style>
