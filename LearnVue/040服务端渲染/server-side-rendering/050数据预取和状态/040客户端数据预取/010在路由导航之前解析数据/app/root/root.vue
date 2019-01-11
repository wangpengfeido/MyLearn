<template>
  <div>
    <div>this is root</div>
    <div>item:{{item}}</div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "root",
    asyncData({store, route}) {
      return store.dispatch('fetchItem', route.params.id);
    },
    computed: {
      item() {
        return this.$store.state.items[this.$route.params.id];
      }
    }
  }
</script>

<style scoped>

</style>