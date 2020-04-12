<template>
  <div>
    <div>this is listen query.</div>
    <div>尝试改变qyery参数</div>
    <div>host:{{ host }}</div>
    <div>param:{{ param }}</div>
    <div>random:{{ random }}</div>
    <div>
      <nuxt-link
        :to="{
          path: '/bcaAsyncData/bdaListenQuery/aaa',
          query: { random: Math.random() }
        }"
      >
        改变query
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BdaListenQueryTest',
  watchQuery: true,
  asyncData({ req, res, params }) {
    let host
    if (process.server) {
      host = req.headers.host
    } else {
      host = 'not in server'
    }
    return {
      host,
      param: params.test,
      random: Math.random()
    }
  }
}
</script>

<style></style>
