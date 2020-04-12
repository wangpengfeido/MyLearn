<template>
  <div>
    <div>this is context.</div>
    <div>host:{{ host }}</div>
    <div>param:{{ param }}</div>
  </div>
</template>

<script>
export default {
  name: 'BcaContextTest',
  asyncData({ req, res, params }) {
    let host
    if (process.server) {
      host = req.headers.host
    } else {
      host = 'not in server'
    }
    return {
      host,
      param: params.test
    }
  }
}
</script>

<style></style>
