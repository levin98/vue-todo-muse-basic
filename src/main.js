import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import MuseUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

// Apply MuseUI to vue
Vue.use(MuseUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
