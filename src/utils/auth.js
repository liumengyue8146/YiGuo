import Cookies from 'js-cookie';

const TokenKey = 'yiguo_token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  //Cookies.set('yiguo_token1', token);
  return Cookies.set(TokenKey, '5d93dae27185790438203b58');
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
