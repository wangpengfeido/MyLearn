import Vue from 'vue';
import {createApp} from './app/app'

const {app, router, store} = createApp();

Vue.mixin({
  beforeMount() {
    const {asyncData} = this.$options;
    if (asyncData) {
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
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



