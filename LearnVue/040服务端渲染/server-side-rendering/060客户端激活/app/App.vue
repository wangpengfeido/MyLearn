<template>
  <!--服务端渲染的html,会在这里添加一个 data-server-rendered="true" 属性-->
  <!--data-server-rendered让客户端知道这部分是在服务端渲染的，挂载时使用“激活模式”挂载-->
  <div id="app">
    <!--激活模式：-->
    <!--在开发模式下，Vue 将推断客户端生成的虚拟 DOM 树 (virtual DOM tree)，是否与从服务器渲染的 DOM 结构 (DOM structure) 匹配。-->
    <!--如果无法匹配，它将退出混合模式，丢弃现有的 DOM 并从头开始渲染。-->
    <!--在生产模式下，此检测会被跳过，以避免性能损耗。-->
    <div>this is app</div>
    <div>
      <router-link to="/root/one/23">/root/one/23</router-link>
      <router-link to="/root/one/24">/root/one/24</router-link>
    </div>
    <div>
      <router-link to="/second-root">/second-root</router-link>
    </div>
    <router-view></router-view>
  </div>
  <!--注意：-->
  <!--浏览器可能会更改的一些特殊的 HTML 结构。-->
  <!--例如，自动插入tbody。这会导致模版不能匹配-->
  <!--所以在模版中应该写有效的html-->
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style scoped>

</style>






