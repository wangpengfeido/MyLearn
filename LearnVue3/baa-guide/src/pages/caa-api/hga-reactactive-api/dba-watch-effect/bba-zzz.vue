<template>
  <fieldset>
    <div>{{test}}</div>
    <div>
      <button @click="stopEffect()">stopEffect</button>
    </div>
  </fieldset>
</template>

<script>
import { watchEffect } from "vue";
export default {
  name: "bba-zzz",
  props: {
    test: {},
  },
  setup(props) {
    const stop = watchEffect(() => {
      console.log("watchEffect", props.test);
    });

    function stopEffect() {
      stop();
    }

    return {
      stopEffect,
    };
  },
};
</script>

<style>
</style>
