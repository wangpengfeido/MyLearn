import Vue from "vue";
import App from "./App.vue";

import "./common/common.scss";

import router from "./router.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
