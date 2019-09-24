import Vue from 'vue';
import Router from 'vue-router';
import BeforeLogin from './views/beforeLogin';
import Home from './views/home/Home.vue';
import Category from './views/home/category/index.vue';
import Eat from './views/home/eat/index.vue';
import Cart from './views/home/cart/index.vue';
import Me from './views/home/me/index.vue';
import Login from './views/Login.vue';
import Sinup from './views/Sinup.vue';
Login;

Vue.use(Router);

export default new Router({
  routes: [
    //引导页路由
    {
      path: '/',
      name: 'beforeLogin',
      component: BeforeLogin,
      meta: {
        keepAlive: true,
      },
    },
    //首页路由
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true,
      },
      children: [
        {
          //分类
          name: 'category',
          path: '/category',
          component: Category,
        },
        //吃饭吧
        {
          name: 'eat',
          path: '/eat',
          component: Eat,
        },
        //购物车
        {
          name: 'cart',
          path: '/cart',
          component: Cart,
        },
        //我的
        {
          name: 'me',
          path: '/me',
          component: Me,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/sinup',
      name: 'sinup',
      component: Sinup,
      meta: {
        keepAlive: true,
      },
    },
  ],
});
