<template>
  <fieldset>
    <h3>注入的响应性</h3>
    <div>如果要保证注入的响应性，需要注入ref，或使用响应式对象。</div>
    <div>
      <span>count:</span>
      <button @click="addCount()">{{state.count}}</button>
    </div>
    <div>
      <span>count2:</span>
      <button @click="addCount2()">{{count2}}</button>
    </div>
    <div>
      <bba-zzz></bba-zzz>
    </div>
  </fieldset>
</template>

<script>
import { ref, reactive, provide } from "vue";
import BbaZzz from "./bba-zzz.vue";

export default {
  name: "bba",
  components: {
    BbaZzz,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    function addCount() {
      state.count++;
    }
    provide("state", state);

    let count2 = ref(0);
    function addCount2() {
      count2.value++;
    }
    provide("count2", count2);

    return {
      state,
      addCount,
      count2,
      addCount2,
    };
  },
};
</script>

<style>
</style>
