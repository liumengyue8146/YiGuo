import { signup, login, getcode, sendimg, setPeople, getpersonal } from './../../utils/user';

// // import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth';
// // import { resetRouter } from '@/router'

// //import { getToken, setToken, removeToken } from '@/utils/user'

import { Toast } from 'vant';

const user = {
  namespaced: true,
  state: {
    tel: '',
    password: '',
    person: {
      name: '未登录',
      password: '',
      birthday: '',
      sex: '',
      imgurl: '',
    },
  },
  mutations: {
    save(state, payload) {
      console.log('哈哈', payload);
      return (state.tel = payload);
    },
    updateperson(state, payload) {
      state.person = payload;
    },
  },
  actions: {
    //用户注册
    async signup({ commit }, payload) {
      //java的接口
      // console.log(1212, payload);
      const result = await signup(payload.str);
      console.log('注册', result.data);
      if (result.data.code == 0) {
        const token = result.data.info;

        console.log('token,payload', token, payload.str);
        payload.$router.push({
          name: 'accman',
          params: {
            token: token,
            str: payload,
          },
        });
        // $router.push("accman");
        //this.$router.push({ name: 'accman' });
      } else {
        Toast.fail('手机号已注册！');
      }
    },
    //用户登录
    // async login({ commit, state }, payload) {
    //     console.log(payload);
    //     const result = await login(payload.str);
    //     console.log(result.data);
    //     if (result.data.code == 0) {
    //         setToken(result.data.info);
    //         Toast.success("登录成功");
    //         payload.$router.push({ name: 'homesmall' });
    //     } else {
    //         Toast.fail("账号或密码错误");
    //     }
    // },

    async login({ commit, state }, payload) {
      let people = {
        tel: payload.tel,
        password: payload.password,
      };
      const result = await login(people);

      if (result.data.code == 'success') {
        setToken(result.data.token);
        Toast.success('登录成功');
        payload.$router.push({ name: 'homesmall' });
      } else {
        Toast.fail('账号或密码错误');
      }
    },

    //获取验证码
    async getcode({ commit, state }, payload) {
      payload = `phone=${payload}`;
      console.log(payload);
      const result = await getcode(payload);
      //console.log(result);
    },

    //上传头像
    async sendimg({ commit }, payload) {
      const result = await sendimg(payload);
      console.log(result);
    },

    //注册后设置用户信息提交
    /*payload是个对象
        {
            birthday: "只能修改一次"
            imgurl: ""
            name: "欧了咳咳"
            password: "****"
            sex: "男"
            token: "8eeeac5452ad04454545ffed6c590330"
        }*/
    async setPeople({ commit }, payload) {
      console.log(payload);
      let str = '';
      for (let item in payload) {
        str += item + '=' + payload[item] + '&';
      }
      str = str.substr(0, str.length - 1);
      //console.log(str);
      const result = await setPeople(str);
      console.log(result);
    },

    //获取个人信息
    async getpersonal({ commit, state }, payload) {
      const result = await getpersonal(payload);
      if (result) {
        state.person = result.data;
      }
      console.log('获取个人信息', result);
    },
  },
  getters: {
    tel(state) {
      console.log('改变了');
      console.log(state.password);
      return state.tel;
    },
    password(state) {
      console.log('改变了密码');
      return state.password;
    },
  },
};
export default user;
