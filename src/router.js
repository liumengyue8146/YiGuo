import Vue from 'vue';
import Router from 'vue-router';
import BeforeLogin from './views/beforeLogin';
import login from './views/login/login.vue';
import register from './views/login/register.vue';

// import Category from './views/home/category/index.vue';
// import Eat from './views/home/eat/index.vue';
// import Cart from './views/home/cart/index.vue';
import Me from './views/home/me/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 登录之前，默认为
    {
      path: '/',
      name: 'beforeLogin',
      component: BeforeLogin,
    },
    //用户登录
    {
      name: 'login',
      path: '/login',
      component: login,
    },
    {
      name: 'register',
      path: '/register',
      component: register,
    },
  ],
});
