import { getpay, addpay } from './../utils/order';
const order = {
  namespaced: true,
  state: {
    paylist: [],
  },
  actions: {
    //根据用户id获取所有订单信息
    async getpay({ commit, state }, payload) {
      console.log('获取订单列表', payload);
      const result = await getpay(payload);
      console.log('获取订单列表', result);
      return result.data;
    },

    //根据用户id添加订单
    async addpay({ commit, state }, payload) {
      const result = await addpay(payload);
      //return result;
    },

    //根据用户token获取购物车
    // async getcart({ commit, state }, payload) {
    //   const result = await getcart(payload);
    //   state.carts = result.data;
    //   console.log('所有购物车信息', result.data);
    //   state.mycart = [];
    //   for (let item of state.carts) {
    //     const result = await getdetail(item.productid);
    //     result.data.original_quantity = item.quantity;
    //     result.data.quantity = item.quantity;
    //     result.data.checked = true;
    //     result.data.cartid = item._id;
    //     state.mycart.push(result.data);
    //   }
    // },

    //根据购物车每条id信息删除对应购物车数据
    //payload为传过来要删除的购物车id组成的数组
    // async removecart({ commit }, payload) {
    //   console.log('数组', payload);
    //   for (let id of payload) {
    //     const result = await removecart(id);
    //     console.log('删除购物车', result);
    //   }
    // },
  },
};

export default order;
