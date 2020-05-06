const componentOne = {
  template: '<div>this is component one</div>',
};
const componentTwo = {
  template: `<div>
    this is component two
    <div>params:{{$route.params}}</div>
    <div>query:{{$route.params.query}}</div>
  </div>`,
};

const routes = [
  { path: '/one', component: componentOne },
  { path: '/two/:id', component: componentTwo, name: 'two' },
];
const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  methods: {
    handleCallback(path) {
      // router.push 和 router.replace 有 onComplete 和 onAbort 回调
      // complete：所有异步钩子解析之后
      // abort:导航到相同路由，或在导航完成前导航到另一个路由
      this.$router.push(
        path,
        () => {
          console.log('complete');
        },
        () => {
          console.log('abort');
        }
      );
    },
    handlePromise(path) {
      // 支持Promise时会返回Promise
      this.$router.push(path).then(
        () => {
          console.log('complete');
        },
        () => {
          console.log('abort');
        }
      );
    },
  },
}).$mount('#app');
