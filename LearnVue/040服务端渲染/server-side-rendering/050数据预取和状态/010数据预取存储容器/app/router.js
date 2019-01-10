import Vue from 'vue';
import Router from 'vue-router';


import One from './root/one/one.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/root'},
      {
        path: '/root',
        component: () => import('./root/root.vue'),
        children: [
          {path: 'one', component: ()=>import('./root/one/one.vue')},
        ]
      },
    ]
  });
}



