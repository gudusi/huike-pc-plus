import { defineAsyncComponent, Component } from "vue";
import { Vue } from "vue-class-component";

export const loadPage = (loader: () => Promise<{ default: Component }>) => {
  return defineAsyncComponent({
    loader
  });
};
