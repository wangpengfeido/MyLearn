<template>
  <fieldset>
    <h3>侦听器调试</h3>
    <div>onTrack 和 onTrigger 选项可用于调试watchEffect的行为。</div>
    <div>onTrack:当一个 reactive 对象属性或一个 ref 作为依赖被追踪时被调用</div>
    <div>onTrigger:当依赖项变更导致副作用被触发时被调用</div>
    <div>注意：onTrack 和 onTrigger 仅在开发模式下生效。</div>
    <div>
      <span>count:</span>
      <button @click="addCount()">{{state.count}}</button>
    </div>
  </fieldset>
</template>

<script>
import { reactive, watchEffect } from "vue";

export default {
  name: "bea-on-trak-on-trigger",
  setup() {
    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }

    watchEffect(
      () => {
        console.log("watchEffect", "bea", state.count);
      },
      {
        onTrack() {
          console.log("onTrack", "bea");
        },
        onTrigger() {
          console.log("onTrigger", "bea");
        },
      }
    );

    return {
      state,
      addCount,
    };
  },
};
</script>

<style>
</style>
