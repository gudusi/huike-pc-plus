import { App } from "@vue/runtime-core";
import { ioc } from "@voyo/core";

import bgPage from "./views/common/bg-page/bg-page.vue";
import Wrapper from "./components/wrapper.vue";
import { ripple } from "./components/ripple.directive";

export const registryYoComponent = (app: App<any>) => {
  app.component("yo-bg", bgPage);
  app.component("yo-wrapper", Wrapper);
  app.directive("yo-ripple", ripple);
};
