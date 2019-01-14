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
        component: () => import('./root/root.vue'),
        children: [
          {path: 'one/:id', component: ()=>import('./root/one/one.vue')},
        ]
      },
    ]
  });
}



