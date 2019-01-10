import {createApp} from './app/app'

const {app, router, store} = createApp();

router.onReady(() => {
  app.$mount('#app');
});



