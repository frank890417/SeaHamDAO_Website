import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fontawesome from "@fortawesome/fontawesome-free";
// import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
