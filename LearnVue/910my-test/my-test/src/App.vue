<template>
  <div class="app">
    <div class="left">
      <ul>
        <li>
          <router-link to="/bba-img-lazy-load">图片懒加载——滚动条监听</router-link>
        </li>
        <li>
          <router-link to="/bca-img-lazy-load">图片懒加载——IntersectionObserver</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 200px;
    border-right: 1px solid black;
  }
  .right {
    width: 0;
    flex-grow: 1;
  }
}
</style>
