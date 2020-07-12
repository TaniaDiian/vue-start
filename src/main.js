import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./services/index";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { PaginationPlugin, TablePlugin, BootstrapVue} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(PaginationPlugin)
Vue.use(TablePlugin)

Vue.config.productionTip = false;
Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
