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
  methods: {},
}).$mount('#app');
