
Vue.use(VueLazyload, {
  // preLoad 是预加载的高度比。
  // 例如显示区域高度为 2，preLoad设置为10，那么进入高度为20的区域时就会开始加载
  preLoad: 10,
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
