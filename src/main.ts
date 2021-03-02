import Vue, { createApp } from "vue";
import "./voyo";
import "./voyo-gateway/voyo-gateway";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registryYoComponent } from "./yo";

const app = createApp(App)
  .use(store)
  .use(router);

registryYoComponent(app);

app.mount("#app");
