import {createApp} from './app/app'

const {app, router} = createApp();

// 改造客户端的路由，以适应异步组件
router.onReady(() => {
  app.$mount('#app');
});



