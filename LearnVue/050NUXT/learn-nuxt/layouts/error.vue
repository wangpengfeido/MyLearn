<template>
  <div>
    <h1>这是自定义错误页面</h1>
    <div>{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
