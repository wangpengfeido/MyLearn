// error 设置加载失败时显示的图片
// v-lazy-container 中的设置会覆盖这个设置
Vue.use(VueLazyload, {
  error: '../assets/404.jpg',
});

const app = new Vue({
  data() {
    return {};
  },
}).$mount('#app');
