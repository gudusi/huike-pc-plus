import { App } from "@vue/runtime-core";

import bgPage from "./views/common/bg-page/bg-page.vue";
import Wrapper from "./components/wrapper.vue";
import { ripple } from "./components/ripple.directive";
import {
  Group,
  Cell,
  Card
} from "./components/functional-components/functional.components";
import PageModal from "./components/page-modal-component/page-modal-component.vue";

export const registryYoComponent = (app: App<any>) => {
  app.component("yo-bg", bgPage);
  app.component("yo-wrapper", Wrapper);
  app.directive("yo-ripple", ripple);
  app.component("yo-group", Group);
  app.component("yo-cell", Cell);
  app.component("yo-card", Card);
  app.component("yo-page-modal", PageModal);
};
