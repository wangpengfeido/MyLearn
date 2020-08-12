<template>
  <div>
    <div>
      <span>count:</span>
      <button @click="addCount()">{{state.count}}</button>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

export default {
  name: "baa-test",
  setup() {
    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    onRenderTracked(() => {
      console.log("onRenderTracked");
    });

    onRenderTriggered(() => {
      console.log("onRenderTriggered");
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
