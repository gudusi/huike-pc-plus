import "@voyo/core/dest/index";
// import "@voyo/core/src/components/tab-group/tab.scss";
import { assemblyComponent } from "@voyo/core/dest/components/AssemblyComponent";
import {
  registryButton,
  registryInput,
  registryButtonIcon,
  registryTabGroup
} from "@voyo/core/dest/components";

import { MenuComponent } from "./voyoComponents/menu.component";

registryButton();
registryInput();
registryButtonIcon();
registryTabGroup();

assemblyComponent("voyoc-menu", MenuComponent);
