import Vue from 'vue';
import Router from 'vue-router';

// import Root from './root/root.vue';
const Root = () => import('./root/root.vue');

import One from './root/one/one.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/root'},
      {
        path: '/root',
        // 使用异步组件
        component: Root,
        // component: ()=>import('./root/root.vue'),
        children: [
          {path: 'one', component: One},
        ]
      },
    ]
  });
}


// 在vue2.5+中，不仅可以在路由组件中使用异步组件，还可以在任何组件中使用异步组件

