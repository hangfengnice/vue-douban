import Vue from 'vue'
import App from './App.vue'
import router from './route'
import './assets/css/reset.css'
import ElementUI from 'element-ui';
import axios from 'axios'
if(process.env.NODE_ENV === 'development'){
  axios.defaults.baseURL = '/api';
}else if(process.env.NODE_ENV === 'production'){
  axios.defaults.baseURL = '/https://douban.uieee.com/v2';
}

Vue.prototype.$axios = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
