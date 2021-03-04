import { App } from "@vue/runtime-core";
import { ioc } from "@voyo/core/dest";

import bgPage from "./views/common/bg-page/bg-page.vue";
import Wrapper from "./components/wrapper.vue";
import { ripple } from "./components/ripple.directive";
import {
  Group,
  Cell,
  Card
} from "./components/functional-components/functional.components";

export const registryYoComponent = (app: App<any>) => {
  app.component("yo-bg", bgPage);
  app.component("yo-wrapper", Wrapper);
  app.directive("yo-ripple", ripple);
  app.component("yo-group", Group);
  app.component("yo-cell", Cell);
  app.component("yo-card", Card);
};
