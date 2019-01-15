<template>
  <div>
    <div>this is root</div>
    <div>item:{{item}}</div>
    <router-view></router-view>
  </div>
</template>

<script>

  // 可以将store模块分割到路由组件的chunk中
  // 那么就需要在这里导入，而不是在store/index.js中
  import rootStoreModule from '../../store/modules/root';

  export default {
    name: "root",
    asyncData({store, route}) {

      // 注册模块
      store.registerModule('root', rootStoreModule);

      return store.dispatch('fetchItem', route.params.id);
    },
    destroyed() {
      // 注意：卸载模块，这样可以避免多次访问路由时重复注册模块(仅对于纯客户端)
      this.$store.unregisterModule('root');
    },
    computed: {
      item() {
        // 这里需要用命名空间取值
        return this.$store.state.root.items[this.$route.params.id];
      }
    }
  }
</script>

<style scoped>

</style>