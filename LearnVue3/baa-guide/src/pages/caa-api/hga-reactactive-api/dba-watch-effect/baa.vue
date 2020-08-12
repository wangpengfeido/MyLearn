<template>
  <fieldset>
    <div>watchEffect 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。</div>
    <div>
      <span>count:</span>
      <button @click="addCount()">{{state.count}}</button>
    </div>
  </fieldset>
</template>

<script>
import { reactive, watchEffect } from "vue";

export default {
  name: "baa",
  setup() {
    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }

    watchEffect(() => {
      console.log("watch effect", state.count);
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
