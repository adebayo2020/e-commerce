import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import store from "./store/";
import Vuelidate from "vuelidate";
// import "nprogress/nprogress.css";
// import OtherDetails from './components/OtherDetails.vue'

// Vue.component('other-details', OtherDetails);
Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
