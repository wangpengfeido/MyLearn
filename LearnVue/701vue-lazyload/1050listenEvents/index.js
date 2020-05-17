// listenEvents 配置在哪些事件中检查懒加载区域的变化
// 例如下面的配置:只在鼠标滚轮滚动时检查,滑动时不会加载图片
Vue.use(VueLazyload, {
  listenEvents: ['mousewheel'],
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
