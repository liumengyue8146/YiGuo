import { get, post, remove } from './service';
//展示收货地址列表
export function getaddress(data) {
  return get(`http://192.168.15.33:3000/api/v1/addresses?userid=${data.userid}`);
}

//添加购物车
export function addaddress(data) {
  return post('http://192.168.15.33:3000/api/v1/addresses/', data);
}
