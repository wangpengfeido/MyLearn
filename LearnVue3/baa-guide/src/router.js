import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/caa-api",
      component: () => import("./pages/caa-api/index.vue"),
      children: [
        {
          path: "hga-cba-ref",
          component: () =>
            import("./pages/caa-api/hga-reactactive-api/cba-ref/index.vue"),
        },
        {
          path: "hga-dba-watch-effect",
          component: () =>
            import(
              "./pages/caa-api/hga-reactactive-api/dba-watch-effect/index.vue"
            ),
        },
        {
          path: "hka-baa-setup",
          component: () =>
            import("./pages/caa-api/hka-composition-api/baa-setup/index.vue"),
        },
        {
          path: "hka-bba-lifecycle-hooks",
          component: () =>
            import(
              "./pages/caa-api/hka-composition-api/bba-lifecycle-hooks/index.vue"
            ),
        },
        {
          path: "hka-bca-provide-inject",
          component: () =>
            import(
              "./pages/caa-api/hka-composition-api/bca-provide-inject/index.vue"
            ),
        },
      ],
    },
    {
      path: "/oaa-test",
      component: () => import("./pages/oaa-test/index.vue"),
      children: [
        {
          path: "baa-proxy-feature",
          component: () =>
            import("./pages/oaa-test/baa-proxy-feature/index.vue"),
        },
      ],
    },
  ],
});

export default router;
