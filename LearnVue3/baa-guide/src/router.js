import { createRouter, createWebHashHistory } from "vue-router";

import CaaApi from "./pages/caa-api/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/caa-api", component: CaaApi }],
});

export default router;
