// attempt 失败时的重试次数
// 存疑
Vue.use(VueLazyload, {
  attempt: 3,
});

const app = new Vue({
  data() {
    return {};
  },
}).$mount('#app');
