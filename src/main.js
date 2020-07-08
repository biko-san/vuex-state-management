import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import UUID from "vue-uuid";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
// Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
