import Vue from "vue";
import VueRouter from "vue-router";

import BbaImgLazyLoad from "./pages/bba-img-lazyload";
import BcaImgLazyLoad from "./pages/bca-img-lazyload";

Vue.use(VueRouter);

const routes = [
  { path: "/bba-img-lazy-load", component: BbaImgLazyLoad },
  { path: "/bca-img-lazy-load", component: BcaImgLazyLoad },
];

const router = new VueRouter({
  routes,
});

export default router;
