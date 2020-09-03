<template>
  <div class="bba-img-lazyload">
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
