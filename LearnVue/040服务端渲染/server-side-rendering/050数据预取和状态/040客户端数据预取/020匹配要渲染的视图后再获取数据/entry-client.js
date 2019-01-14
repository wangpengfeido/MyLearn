// 这种策略的好处是，导航触发时可以立即切换视图
// 坏处是视图在渲染时不会有完整的可用数据

import Vue from 'vue';
import {createApp} from './app/app'

const {app, router, store} = createApp();

Vue.mixin({
  // 通过全局mixin来实现这个策略
  beforeMount() {
    const {asyncData} = this.$options;
    if (asyncData) {
      // 将取数据操作分配给this.dataPromise
      // 这样就可以在组件中当数据准备就绪后，用this.dataPromise.then来执行后续操作
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
  // 还有一个问题是当路由组件重用（params或query更改，例如从user/1到user/2），也应该调用asyncData
  // 这时也可以用全局mixin解决
  beforeRouteUpdate(to, from, next) {
    const {asyncData} = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      }).then(next).catch(next);
    } else {
      next();
    }
  },
});

router.onReady(() => {
  app.$mount('#app');
});



