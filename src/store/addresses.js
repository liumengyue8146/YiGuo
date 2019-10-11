import { addaddress, getaddress } from './../utils/address';
const address = {
  namespaced: true,
  state: {
    addresslist: [],
    defaultaddress: {},
    order: [], //订单
  },
  mutations: {
    updateDefault(state, payload) {
      state.defaultaddress = payload;
    },
    updateOrder(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    async getaddress({ commit, state }, payload) {
      console.log(payload);
      const result = await getaddress(payload);

      state.addresslist = result.data.addresses;
    },
    //添加收货地址
    async addaddress({ commit }, payload) {
      const result = await addaddress(payload);
    },
  },
  getters() {},
};
export default address;
