<template>
  <div class="oaa-test">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/oaa-test/baa-proxy-feature">proxy 特性测试</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "oaa-test",
};
</script>

<style lang="scss" scoped>
.oaa-test {
  width: 100%;
  height: 100%;
  display: flex;
  .nav {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid black;
  }
  .content {
    flex-grow: 1;
    width: 0;
    overflow-y: auto;
  }
}
</style>
