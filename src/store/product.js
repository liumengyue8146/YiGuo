import { getproduct, addcart, getcart, getdetail, removecart } from "./../utils/product"
import { async } from "q";
const product = {
    namespaced: true,
    state: {
        categories: [],
        products: [],
        carts: [],
        mycart: [],
    },
    actions: {
        //获取所有商品信息
        async getproduct({ commit, state }, payload) {
            const result = await getproduct(payload);
            state.categories = result.data.categories;
            state.products = result.data.products;

        },

        //根据商品id获取详细
        async getdetail({ commit, state }, payload) {
            const result = await getdetail(payload);
            return result;
        },

        //添加购物车
        async addcart({ commit }, payload) {
            const result = await addcart(payload);
            console.log("购物车", result);
        },

        //根据用户token获取购物车
        async getcart({ commit, state }, payload) {
            const result = await getcart(payload);
            state.carts = result.data;
            console.log('所有购物车信息', result.data);
            state.mycart = [];
            for (let item of state.carts) {

                const result = await getdetail(item.productid);
                result.data.original_quantity = item.quantity;
                result.data.quantity = item.quantity;
                result.data.checked = true;
                result.data.cartid = item._id;
                state.mycart.push(result.data);
            }
        },

        //根据购物车每条id信息删除对应购物车数据
        //payload为传过来要删除的购物车id组成的数组
        async removecart({ commit }, payload) {
            console.log("数组", payload);
            for (let id of payload) {
                const result = await removecart(id);
                console.log("删除购物车", result);
            }
        }

    },
    getters: {
        currentState(state) {

        }
    }
}

export default product;