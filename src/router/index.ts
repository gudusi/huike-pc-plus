import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { loadPage } from "./loadPage";
import { mainRouter } from "./main-router";
import { ioc } from "@voyo/core";
import { navDataTest } from "./navData";

const settingService = ioc.getService("yo-setting");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: loadPage(() =>
      import("../views/common/login-page/login-page.vue")
    )
  },
  {
    path: "/main",
    name: "main",
    component: loadPage(() =>
      import("../views/common/core-page/core-page.vue")
    ),
    children: mainRouter,
    beforeEnter: (from, to, next) => {
      //设置菜单
      settingService.navSetNavData(navDataTest);
      next(true);
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
settingService.router = router;
export default router;
