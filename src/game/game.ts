import Vue, { createApp } from "vue";
import "../voyo";
import "../voyo-gateway/voyo-gateway";
import App from "./app-page/app-page.vue";

const app = createApp(App);

app.mount("#app");
