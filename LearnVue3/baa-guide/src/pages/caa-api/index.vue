<template>
  <div class="caa-api">
    <div class="nav">
      <ul>
        <li>
          <div>reactive api</div>
          <ul>
            <li>
              <div>refs</div>
              <ul>
                <li>
                  <router-link to="/caa-api/hga-cba-ref">ref</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <div>computed and watch</div>
              <ul>
                <li>
                  <router-link to="/caa-api/hga-dba-watch-effect">watchEffect</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div>composition api</div>
          <ul>
            <li>
              <router-link to="/caa-api/hka-baa-setup">setup</router-link>
            </li>
            <li>
              <router-link to="/caa-api/hka-bba-lifecycle-hooks">lifecycle hooks</router-link>
            </li>
            <li>
              <router-link to="/caa-api/hka-bca-provide-inject">Provide/Inject</router-link>
            </li>
          </ul>
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
  name: "caa-api",
};
</script>

<style lang="scss" scoped>
.caa-api {
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
