// import 'amfe-flexible';
import Vue from 'vue';
import Vant from 'vant';
// import { Cell, CellGroup, Lazyload, Sticky, Popup, Grid, GridItem } from 'vant';

import 'vant/lib/index.css';

import App from './App.vue';
import router from './router';
import store from './store';
//  import { Lazyload } from 'vant';
Vue.use(Vant);
// Vue.use(Lazyload);
// Vue.use(Cell).use(CellGroup);
// Vue.use(Sticky);
// Vue.use(Popup);
// Vue.use(Grid).use(GridItem);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
