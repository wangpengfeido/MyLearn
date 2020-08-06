<template>
  <div class="app">
    <div class="header">
      <div class="link-item">
        <router-link to="/caa-api">api</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 20px;
    padding: 15px 30px;
    background-color: rgb(62, 175, 124);
    display: flex;
    .link-item {
      margin: 0 15px;
      a {
        color: #fff;
      }
    }
  }
  .content {
    flex-grow: 1;
    height: 0;
  }
}
</style>
