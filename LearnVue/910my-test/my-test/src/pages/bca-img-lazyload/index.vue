<template>
  <div class="bba-img-lazyload">
    <div>
      <div>缺点：</div>
      <ol>
        <li>处理嵌套滚动和嵌套元素时十分复杂。（可以使用getBoundingClientRect()方法检查元素是否进入视口，但很消耗性能，且仍然无法处理嵌套滚动条的问题。）</li>
        <li>检查元素时会触发重排。</li>
        <li>如果页面刷新时滚动条处在最后，那么所有的图片都会加载</li>
      </ol>
    </div>
    <img class="img" v-lazyload="require('../../assets/images/1.jpg')" />
    <img class="img" v-lazyload="require('../../assets/images/2.jpg')" />
    <img class="img" v-lazyload="require('../../assets/images/3.jpg')" />
    <img class="img" v-lazyload="require('../../assets/images/4.jpg')" />
    <img class="img" v-lazyload="require('../../assets/images/5.jpg')" />
  </div>
</template>

<script>
import LazyloadDirective from "./lazyload-directive.js";

export default {
  name: "bba-img-lazyload",
  directives: {
    lazyload: LazyloadDirective,
  },
};
</script>

<style scoped lang="scss">
.bba-img-lazyload {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.img {
  display: block;
  height: 1000px;
}
</style>
