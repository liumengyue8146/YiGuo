import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Cell, CellGroup } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vant);
Vue.use(Cell).use(CellGroup);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
