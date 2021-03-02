import { createStore } from "vuex";
import { userStore } from "./user/user.store";
import { uiStore } from "./ui.store";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userStore,
    ui: uiStore
  }
});
