import Vue from 'vue';
import Router from 'vue-router';
// import BeforeLogin from './views/beforeLogin';
import Home from './views/home/Home.vue';
import Category from './views/home/category/index.vue';
import Eat from './views/home/eat/index.vue';
import Cart from './views/home/cart/index.vue';
import Me from './views/home/me/index.vue';
import Login from './views/Login.vue';
import Sinup from './views/Sinup.vue';
import PayforOrder from './views/payforOrder.vue';
import NewAddress from './views/newAddress.vue';
import AddressList from './views/addressList.vue';
import HelpCenter from './views/helpCenter.vue';
// Login;

Vue.use(Router);

export default new Router({
  routes: [
    // 引导页路由
    // {
    //   path: '/',
    //   name: 'beforeLogin',
    //   component: BeforeLogin,
    //   meta: {
    //     keepAlive: true,
    //   },
    // },
    // 帮助中心
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: HelpCenter,
      meta: {
        keepAlive: true,
      },
    },
    // 收获地址列表addressList
    {
      path: '/addressList',
      name: 'addressList',
      component: AddressList,
      meta: {
        keepAlive: true,
      },
    },
    // 新增收获地址newAddress
    {
      path: '/newAddress',
      name: 'newAddress',
      component: NewAddress,
      meta: {
        keepAlive: true,
      },
    },
    // 订单结算payforOrder
    {
      path: '/payforOrder',
      name: 'payforOrder',
      component: PayforOrder,
      meta: {
        keepAlive: true,
      },
    },
    // 首页路由
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true,
      },
      children: [
        {
          // 分类
          name: 'category',
          path: '/category',
          component: Category,
        },
        // 吃饭吧
        {
          name: 'eat',
          path: '/eat',
          component: Eat,
        },
        // 购物车
        {
          name: 'cart',
          path: '/cart',
          component: Cart,
        },
        // 我的
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
