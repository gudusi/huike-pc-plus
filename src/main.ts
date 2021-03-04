import Vue, { createApp } from "vue";
import "./voyo";
import "./voyo-gateway/voyo-gateway";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registryYoComponent } from "./yo";
import { registryEle } from "./ele";
import "./styles/media-html";

const app = createApp(App)
  .use(store)
  .use(router);

registryYoComponent(app);
registryEle(app);

app.mount("#app");
