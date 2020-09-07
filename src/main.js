import Vue from "vue";
import VueRouter from 'vue-router'
import VueContentPlaceholders from 'vue-content-placeholders'
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.use(VueContentPlaceholders)
Vue.use(VueRouter)

require("./components/_globals")

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
