import { NavListItem } from "@voyo/core/dest/utils";

export const navDataTest: NavListItem[] = [
  {
    label: "工具栏",
    icon: "setting",
    children: [
      { label: "蓝衣", path: "/main/test/one" },
      { label: "兰儿", path: "/main/test/two" }
    ]
  },
  {
    label: "地球节律",
    icon: "family",
    children: [{ label: "懒散", path: "/main/test/three" }]
  },
  {
    label: "小游戏管理",
    icon: "family",
    children: [
      { label: "创建活动", path: "/main/createGame" },
      { label: "小游戏列表", path: "/main/gamesList" },
      { label: "中奖记录", path: "/main/gamesRecord" }
    ]
  },
  {
    label: "商品秒杀",
    icon: "family",
    children: [
      { label: "创建活动", path: "/main/seconds/create" },
      { label: "商品管理", path: "/main/seconds/management" },
      { label: "商品添加", path: "/main/seconds/add" },
      { label: "抢购记录", path: "/main/seconds/rush" }
    ]
  }
];
