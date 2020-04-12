<template>
  <div>
    <div>this is handling error.</div>
  </div>
</template>

<script>
export default {
  name: 'BeaHandlingError',
  asyncData({ error }) {
    error({ statusCode: 502, message: '错误' })
  }
}
</script>

<style></style>
