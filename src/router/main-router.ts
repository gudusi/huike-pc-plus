import { RouteRecordRaw } from "vue-router";
import { loadPage } from "@/router/loadPage";

export const mainRouter: Array<RouteRecordRaw> = [
  {
    path: "test/one",
    component: loadPage(() =>
      import("../views/test/test-one-page/test-one-page.vue")
    )
  },
  {
    path: "test/two",
    component: loadPage(() =>
      import("../views/test/test-two-page/test-two-page.vue")
    )
  },
  {
    path: "test/three",
    component: loadPage(() =>
      import("../views/test/test-three-page/test-three-page.vue")
    )
  }
];
