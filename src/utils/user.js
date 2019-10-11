import { get, post } from './service';

//用户注册
export function signup(data) {
  return post('http://47.105.166.178:8080/yiguo/codeVerify', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  //return post("http://192.168.15.33:3000/api/v1/auth/reg", data);
}
// export function login(data) {
//     //118.31.2.64
//     return post("http://47.105.166.178:8080/yiguo/login", data, {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     })
// }

//自己的登录接口;
export function login(data) {
  //118.31.2.64
  return post('http://localhost:3000/api/v1/auth/login', data);
}

export function getcode(data) {
  //118.31.2.64
  return post('http://47.105.166.178:8080/yiguo/phoneCode', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function sendimg(data) {
  return post('http://47.105.166.178:8080/yiguoImgs/', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

//完善个人信息
export function setPeople(data) {
  return post('http://47.105.166.178:8080/yiguo/perfectHtml', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

//获取个人信息
export function getpersonal(data) {
  return post('http://localhost:3000/api/v1/users/info', data);
}
