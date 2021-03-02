import { ActionContext, Module } from "vuex";

export interface UserState {
  isLogin: boolean;
  username: string;
  positionName: string;
  token: string;
  avatar: string;
}

export const userStore: Module<UserState, any> = {
  namespaced: true,
  state: {
    isLogin: false,
    username: "Account01",
    positionName: "管理员",
    token: "",
    avatar: "https://huike2.oss-cn-beijing.aliyuncs.com/pc/panda.jpg"
  },
  actions: {
    userLoginFromAccount(
      {},
      { username, password }: { username: string; password: string }
    ) {},
    userLoginFromTicket() {},
    getMenus() {}
  }
};
