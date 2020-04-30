/**
 * Created by dell on 2017/8/27.
 */
const componentOne = {
  template: `
    <div>
      this is component one
      <div>id:{{$route.params.id}}</div>
    </div>
  `,
  created() {
    console.log('component one created');
  },
  watch: {
    $route(to, from) {
      console.log('watch: route is changed', to, from);
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`before route update:`, to, from);
    next();
  },
};

const componentTwo = {
  template: `
    <div>this is component two
      <div>id:{{$route.params.id}}</div>
      <div>name:{{$route.params.name}}</div>
    </div>
  `,
};

const componentTwo1 = {
  template: `
    <div>
      this is component two1
    </div>
  `,
};

const componentThree = {
  template: `
    <div>
      this is component three
      <div>id:{{$route.params.id}}</div>
    </div>
  `,
};

const componentUserEvery = {
  template: `
    <div>
      this is user every thing.
      <div>pathMatch:{{$route.params.pathMatch}}</div>
    </div>
  `,
};

const componentEvery = {
  template: `
    <div>
      this is every thing.
      <div>pathMatch:{{$route.params.pathMatch}}</div>
    </div>
  `,
};

const routes = [
  // 动态路由参数，格式 ":xxx"，参数放在 $route.params 中
  // 除了 $route.params，还有 $route.query,$route.hash 等参数
  { path: '/one/:id', component: componentOne },
  { path: '/two/:id/post/:name', component: componentTwo },
  { path: '/two/1/post/a', component: componentTwo1 },
  { path: '/three/:id?', component: componentThree },
  { path: '/user-*', component: componentUserEvery },
  { path: '*', component: componentEvery },
];
const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount('#app');
