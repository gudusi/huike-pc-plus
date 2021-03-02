import "@voyo/core/dest/index";
import { assemblyComponent } from "@voyo/core/dest/components/AssemblyComponent";
import {
  registryButton,
  registryInput,
  registryButtonIcon
} from "@voyo/core/dest/components";

import { MenuComponent } from "./voyoComponents/menu.component";

registryButton();
registryInput();
registryButtonIcon();

assemblyComponent("voyoc-menu", MenuComponent);
