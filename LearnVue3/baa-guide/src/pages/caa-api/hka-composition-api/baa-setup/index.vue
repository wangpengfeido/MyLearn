<template>
  <div>
    <div>setup 在 beforeCreate 钩子之前被调用。</div>
    <baa-in-template></baa-in-template>
    <bba-in-render></bba-in-render>
    <bca-params class="test" :a="'aaa'" @do-sth="handleDo()">
      <div>this is slot</div>
    </bca-params>
    <fieldset>
      <h3>this 的使用</h3>
      <div>this 在 setup() 中不可用。</div>
    </fieldset>
  </div>
</template>

<script>
import BaaInTemplate from "./baa-in-template.vue";
import BbaInRender from "./bba-in-render.js";
import BcaParams from "./bca-params.vue";

export default {
  name: "baa-setup",
  components: {
    BaaInTemplate,
    BbaInRender,
    BcaParams,
  },
  setup() {
    function handleDo() {
      console.log("sth");
    }
    return {
      handleDo,
    };
  },
};
</script>

<style>
</style>
