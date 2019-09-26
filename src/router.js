/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import Router from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import BeforeLogin from './views/beforeLogin';
// eslint-disable-next-line import/no-unresolved
import Home from './views/home/Home.vue';
// eslint-disable-next-line import/no-unresolved
import Category from './views/home/category/index.vue';
// eslint-disable-next-line import/no-unresolved
import Eat from './views/home/eat/index.vue';
// eslint-disable-next-line import/no-unresolved
import Cart from './views/home/cart/index.vue';
// eslint-disable-next-line import/no-unresolved
import Me from './views/home/me/index.vue';
// eslint-disable-next-line import/no-unresolved
import Login from './views/Login.vue';
// eslint-disable-next-line import/no-unresolved
import Sinup from './views/Sinup.vue';

// liu
import PayforOrder from './views/payforOrder.vue'; // 订单支付
import NewAddress from './views/newAddress.vue'; // 新增地址
import AddressList from './views/addressList.vue'; //  地址列表
import HelpCenter from './views/helpCenter.vue'; // 帮助中心
import TheNewGood from './views/TheNewGood.vue'; //  新品荟萃
import CoinDetails from './views/CoinDetails.vue'; // 悠币明细
import MemberEnjoy from './views/MemberEnjoy.vue'; // 会员尊享
import IntegralForFresh from './views/IntegralForFresh.vue'; // 积分换生鲜
// Login;

// eslint-disable-next-line import/no-unresolved
import Detail from './views/home/category/detail.vue';
import AccMang from './views/home/me/Zhagnhu.vue';
// eslint-disable-next-line import/no-unresolved
import Settings from './views/home/me/Settings.vue';
import Message from './views/home/me/Message.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 引导页路由

    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: HelpCenter,
      meta: {
        keepAlive: true,
      },
    },
    // 积分换生鲜Integral for fresh
    {
      path: '/integralForFresh',
      name: 'integralForFresh',
      component: IntegralForFresh,
      meta: {
        keepAlive: true,
      },
    },
    // 会员尊享
    {
      path: '/memberEnjoy',
      name: 'memberEnjoy',
      component: MemberEnjoy,
      meta: {
        keepAlive: true,
      },
    },
    // 悠币明细
    {
      path: '/coinDetails',
      name: 'coinDetails',
      component: CoinDetails,
      meta: {
        keepAlive: true,
      },
    },
    // 新品荟萃liu
    {
      path: '/theNewGood',
      name: 'theNewGood',
      component: TheNewGood,
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
    {
      name: 'detail',
      path: '/detail',
      component: Detail,
    },
    {
      name: 'accman',
      path: '/accman',
      component: AccMang,
    },
    {
      name: 'settings',
      path: '/settings',
      component: Settings,
    },
    {
      name: 'message',
      path: '/message',
      component: Message,
    },
  ],
});
