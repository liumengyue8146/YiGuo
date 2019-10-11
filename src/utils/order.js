import { get, post, remove } from './service';
//展示订单列表
export function getpay(data) {
  return get(`http://192.168.15.33:3000/api/v1/orders/?userid=${data}`);
}

//添加订单
export function addpay(data) {
  return post('http://192.168.15.33:3000/api/v1/orders/', data);
}
