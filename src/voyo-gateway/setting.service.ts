import { IOCProvider, ROUTER_CHANGE_IOC_NAME, ioc } from "@voyo/core/dest";
import { Subject, of, merge } from "rxjs";
import { ref } from "vue";

import {
  NavListItem,
  NavDataHandler,
  dataFactory
} from "@voyo/core/dest/utils";
import { Router } from "vue-router";

@IOCProvider({
  name: "yo-setting"
})
export class SettingService {
  router: Router;
  navMenuStatus = false;
  navData: NavListItem[] = [];
  navDataFactory: NavDataHandler = new NavDataHandler();
  navDataChange: Subject<NavListItem[]> = new Subject<NavListItem[]>();
  navMenuChange: Subject<boolean> = new Subject<boolean>();

  watchNavMenuChangeImmediate() {
    return merge(of(this.navMenuStatus), this.navMenuChange);
  }
  watchNavDataImmediate() {
    return merge(of(this.navData), this.navDataChange);
  }
  navMenuTrigger() {
    this.navMenuChange.next((this.navMenuStatus = !this.navMenuStatus));
  }
  navMenuClose() {
    this.navMenuChange.next((this.navMenuStatus = false));
  }

  navSetNavData(navData: NavListItem[]) {
    this.navData = ref(dataFactory(navData)).value;
    this.navDataFactory.setData(this.navData);
    this.navDataChange.next(this.navData);
  }
  navPathChange(path: string) {
    this.navDataFactory.collapseNavCardFromPath(path);
  }
  navItemClick(item: NavListItem, nextClick?: (i: NavListItem) => void) {
    this.navDataFactory.clickItem(item, () => {
      item.path && this.router.push(item.path);
      nextClick && nextClick(item);
      this.navMenuClose();
    });
  }
}
