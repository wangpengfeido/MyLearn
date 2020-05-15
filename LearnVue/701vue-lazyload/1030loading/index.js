// loading 选项指定加载时显示的图片
Vue.use(VueLazyload,{
  loading:'../assets/loading.svg'
});

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
