<template>
  <div>
    <div>this is root</div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "root",
    asyncData({store, route}) {
      return store.dispach('fetchItem', route.params.id);
    }
  }
</script>

<style scoped>

</style>