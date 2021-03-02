/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "vue-class-component"{
  export * from "vue-class-component/dist/vue-class-component";
  import {Vue as V} from "vue-class-component/dist/vue-class-component";
  import Store from "./store/index"
  export class Vue extends V{
   $store:Store;
  }
}

declare module "@env"{
  export const name:any;

}