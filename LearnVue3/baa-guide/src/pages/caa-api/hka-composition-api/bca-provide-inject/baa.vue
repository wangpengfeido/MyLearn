<template>
  <fieldset>
    <div>使用 provide/inject 进行依赖注入</div>
    <div>provide 第一个参数可接受继承自 Symbol 的 InjectionKey 接口，或一个字符串</div>
    <div>inject 第二个参数可接受一个可选的默认值</div>
    <baa-zzz></baa-zzz>
  </fieldset>
</template>

<script>
import { provide } from "vue";
import BaaZzz from "./baa-zzz.vue";

export default {
  name: "baa",
  components: {
    BaaZzz,
  },
  setup() {
    provide("theme", "dark");
  },
};
</script>

<style>
</style>
