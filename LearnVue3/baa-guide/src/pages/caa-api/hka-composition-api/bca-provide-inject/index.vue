<template>
  <div>
    <baa></baa>
    <bba></bba>
  </div>
</template>

<script>
import Baa from "./baa.vue";
import Bba from "./bba.vue";

export default {
  name: "bca-provide-inject",
  components: {
    Baa,
    Bba
  },
};
</script>

<style>
</style>
