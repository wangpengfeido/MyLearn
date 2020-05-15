// vue-lazyLoad 可以在合适的时机懒加载图片和组件

Vue.use(VueLazyload);

const app = new Vue({
  data() {
    return {
      imgList: Array.from({ length: 100 }).map((item, index) => {
        return {
          index,
          url: `../assets/test.jpg?${index}`,
        };
      }),
    };
  },
}).$mount('#app');
