import Vue from 'vue'
import App from './App.vue'
import router from './route'
import './assets/css/reset.css'
import ElementUI from 'element-ui';
import { Notification } from 'element-ui';
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$notify = Notification
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
