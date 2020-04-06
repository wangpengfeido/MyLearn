<template>
  <div>
    <div>this is nested dinamic child</div>
    <div>params:{{ $route.params.nestedDinamicChild }}</div>
    <div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedDinamicChild'
}
</script>

<style></style>
