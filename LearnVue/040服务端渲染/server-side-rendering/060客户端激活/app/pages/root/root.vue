<template>
  <div>
    <div>this is root</div>
    <div>item:{{item}}</div>
    <router-view></router-view>
  </div>
</template>

<script>

  import rootStoreModule from '../../store/modules/root';

  export default {
    name: "root",
    asyncData({store, route}) {

      store.registerModule('root', rootStoreModule);

      return store.dispatch('fetchItem', route.params.id);
    },
    destroyed() {
      this.$store.unregisterModule('root');
    },
    computed: {
      item() {
        return this.$store.state.root.items[this.$route.params.id];
      }
    }
  }
</script>

<style scoped>

</style>