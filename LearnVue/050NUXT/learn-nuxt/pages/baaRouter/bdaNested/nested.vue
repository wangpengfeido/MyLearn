<template>
  <div>
    <div>this is nested</div>
    <div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nested'
}
</script>

<style></style>
