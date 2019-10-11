import {get, post, remove } from './service'
//获取商品全部信息
export function getproduct(data) {

    return get("http://192.168.15.33:3000/api/v1/products/", data);
}

//添加购物车
export function addcart(data) {

    return post("http://192.168.15.33:3000/api/v1/shopcarts/", data);
}

//根据用户id获取购物车
export function getcart(token) {
    return get("http://192.168.15.33:3000/api/v1/shopcarts/" + token);
}

//根据购物车每条数据id删除购物车数据
export function removecart(id) {
    return remove("http://192.168.15.33:3000/api/v1/shopcarts/remove/" + id);
}

//根据商品id获取详情
export function getdetail(token) {
    return get("http://192.168.15.33:3000/api/v1/products/" + token)
}