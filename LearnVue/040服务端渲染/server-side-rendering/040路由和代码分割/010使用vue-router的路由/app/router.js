import Vue from 'vue';
import Router from 'vue-router';

import One from './root/one/one.vue';
import Root from './root/root.vue';

Vue.use(Router);

// 创建一个创建router的工厂函数
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/root'},
      {
        path: '/root',
        component: Root,
        children: [
          {path: 'one', component: One},
        ]
      },
    ]
  });
}




