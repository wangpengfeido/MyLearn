<template>
  <div>
    <div>this is nested dinamic</div>
    <div>params:{{ $route.params.nestedDinamic }}</div>
    <div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedDinamic'
}
</script>

<style></style>
