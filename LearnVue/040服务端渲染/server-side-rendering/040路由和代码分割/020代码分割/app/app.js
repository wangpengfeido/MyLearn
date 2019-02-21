
import Vue from 'vue';
import App from './App.vue';
import {createRouter} from "./router";

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,        // 使用router
    render: h => h(App),
  });

  // 返回app和router
  return {app, router};
}




