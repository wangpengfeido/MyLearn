<template>
  <fieldset>
    <h3>停止监听</h3>
    <div>当 watchEffect 在组件的 setup() 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。</div>
    <div>也可以使用返回的 stop 方法停止</div>
    <div>
      <div>
        <span>count:</span>
        <button @click="addOneCount()">{{one.count}}</button>
      </div>
      <div>
        <input type="radio" v-model="one.isShow" :value="true" />
        <input type="radio" v-model="one.isShow" :value="false" />
      </div>
      <bba-zzz v-if="one.isShow" :test="one.count"></bba-zzz>
    </div>
  </fieldset>
</template>

<script>
import BbaZzz from "./bba-zzz.vue";
import { reactive } from "vue";

export default {
  name: "bba-stop-watch",
  components: {
    BbaZzz,
  },
  setup() {
    const one = reactive({
      count: 0,
      isShow: true,
    });
    function addOneCount() {
      one.count++;
    }

    return {
      one,
      addOneCount,
    };
  },
};
</script>

<style>
</style>
