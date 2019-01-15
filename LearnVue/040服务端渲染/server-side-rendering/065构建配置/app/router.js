import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/root'},
      {
        path: '/root',
        component: () => import('./pages/root/root.vue'),
        children: [
          {path: 'one/:id', component: () => import('./pages/root/one/one.vue')},
        ]
      },
      {path: '/second-root', component: () => import('./pages/second-root/second-root.vue')},
    ]
  });
}



