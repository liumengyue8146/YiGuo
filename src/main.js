import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload, Toast } from 'vant';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Toast);

import App from './App.vue';
import router from './router';
import store from './store.js';



Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');