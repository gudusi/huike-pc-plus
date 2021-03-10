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
  },
  {
    path: "seconds/create",
    component: loadPage(() =>
      import(
        "../views/seconds-kill/create-activities-page/create-activities-page.vue"
      )
    )
  },
  {
    path: "seconds/management",
    component: loadPage(() =>
      import(
        "../views/seconds-kill/commodity-management-page/commodity-management-page.vue"
      )
    )
  },
  {
    path: "seconds/add",
    component: loadPage(() =>
      import("../views/seconds-kill/commodity-add-page/commodity-add-page.vue")
    )
  },
  {
    path: "createGame",
    component: loadPage(() =>
      import("../views/games/create-game-page/create-game-page.vue")
    )
  },
  {
    path: "gamesList",
    component: loadPage(() =>
      import("../views/games/games-list-page/games-list-page.vue")
    )
  },
  {
    path: "gamesRecord",
    component: loadPage(() =>
      import("../views/games/games-record-page/games-record-page.vue")
    )
  }
  // {
  //   path: "seconds/rush",
  //   component: loadPage(() =>
  //     import("../views/seconds-kill/rush-record-page/rush-record-page.vue")
  //   )
  // }
];
