import Vue from 'vue';
import Vuex from 'vuex';
import user from './store/modules/user';
import product from './store/product';
import address from './store/addresses';
import order from './store/orders';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    product,
    address,
    order,
  },
});
