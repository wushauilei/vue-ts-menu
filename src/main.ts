import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
// import '@/utils/rem1.js';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/utils/http.ts';

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
