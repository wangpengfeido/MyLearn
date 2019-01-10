<template>
    <div>
        <div>this is root</div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "root",
    // 在路由组件中搞一个取数据的静态方法，留作以后-该组件需要渲染时取对应数据-调用
    // 由于该方法需要在组件实例化之前调用，所以不能访问this，传入store和route实例
    asyncData({store, route}) {
      return store.dispach('fetchItem', route.params.id);
    },
    computed: {
      // 使用store中的数据
      item() {
        return this.$store.state.items[this.$route.params.id];
      }
    }
  }
</script>

<style scoped>

</style>