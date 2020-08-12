<template>
  <fieldset>
    <div>reactive: {{state.count}}</div>
    <div>ref:{{count2}}</div>
  </fieldset>
</template>

<script>
import { inject } from "vue";

export default {
  name: "bba-zzz",
  setup() {
    const state = inject("state");
    const count2 = inject("count2");

    return {
      state,
      count2,
    };
  },
};
</script>

<style>
</style>
