<template>
  <fieldset>
    <div>current theme:{{theme}}</div>
  </fieldset>
</template>

<script>
import { inject } from "vue";

export default {
  name: "baa-zzz",
  setup() {
    const theme = inject("theme", "light");
    return { theme };
  },
};
</script>

<style>
</style>
