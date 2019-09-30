import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/home/Home.vue';
import Homesmall from './views/home/homesmall/index.vue';
import Category from './views/home/category/index.vue';
import Eat from './views/home/eat/index.vue';
import Cart from './views/home/cart/index.vue';
import Me from './views/home/me/index.vue';
import Login from './views/Login.vue';
import Sinup from './views/Sinup.vue';

import Zuomeishi from './views/home/eat/zuomeishi.vue'; //吃饭吧/做美食
import Zhangzhishi from './views/home/eat/zhangzhishi.vue'; //吃饭吧/涨知识
import Shenghuojia from './views/home/eat/shenghuojia.vue'; //吃饭吧/生活家

// liu_haha
import PayforOrder from './views/payforOrder.vue'; // 订单支付
import NewAddress from './views/newAddress.vue'; // 新增地址
import AddressList from './views/addressList.vue'; //  地址列表
import HelpCenter from './views/helpCenter.vue'; // 帮助中心
import TheNewGood from './views/TheNewGood.vue'; //  新品荟萃?
import CoinDetails from './views/CoinDetails.vue'; // 悠币明细
import MemberEnjoy from './views/MemberEnjoy.vue'; // 会员尊享?
import IntegralForFresh from './views/IntegralForFresh.vue'; // 积分换生鲜?
import GiftVoucher from './views/GiftVoucher.vue'; // 提货券

// Login;

import Detail from './views/home/category/detail.vue';
import AccMang from './views/home/me/Zhagnhu.vue';
import Settings from './views/home/me/Settings.vue';
import Message from './views/home/me/Message.vue';
import Card from './views/home/me/Card.vue'; //我的卡包
import MyOrder from './views/home/me/MyOrder.vue'; //我的订单


Vue.use(Router);

export default new Router({
    routes: [
        // 首页路由
        {
            path: '/',
            name: 'homesmall',
            component: Homesmall,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/category',
            name: 'category',
            component: Category,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/eat',
            name: 'eat',
            component: Eat,
            meta: {
                keepAlive: true,
            },
            children: [{
                    name: 'zuomeishi',
                    path: '/zuomeishi',
                    component: Zuomeishi,
                    meta: {
                        keepAlive: true,
                    },
                },
                {
                    name: 'zhangzhishi',
                    path: '/zhangzhishi',
                    component: Zhangzhishi,

                },
                {
                    name: 'shenghuojia',
                    path: '/shenghuojia',
                    component: Shenghuojia,

                },
            ],
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta: {
                keepAlive: true,
            },
        },
        {
            path: '/me',
            name: 'me',
            component: Me,
            meta: {
                keepAlive: true,
            },
        },
        // 帮助中心
        {
            path: '/helpCenter',
            name: 'helpCenter',
            component: HelpCenter,
            meta: {
                keepAlive: false,
            },
        },
        // 提货券
        {
            path: '/giftVoucher',
            name: 'giftVoucher',
            component: GiftVoucher,
            meta: {
                keepAlive: false,
            },
        },
        // 积分换生鲜
        {
            path: '/integralForFresh',
            name: 'integralForFresh',
            component: IntegralForFresh,
            meta: {
                keepAlive: false,
            },
        },
        // 会员尊享
        {
            path: '/memberEnjoy',
            name: 'memberEnjoy',
            component: MemberEnjoy,
            meta: {
                keepAlive: false,
            },
        },
        // 悠币明细
        {
            path: '/coinDetails',
            name: 'coinDetails',
            component: CoinDetails,
            meta: {
                keepAlive: false,
            },
        },
        // 新品荟萃liu
        {
            path: '/theNewGood',
            name: 'theNewGood',
            component: TheNewGood,
            meta: {
                keepAlive: false,
            },
        },
        // 收获地址列表addressList
        {
            path: '/addressList',
            name: 'addressList',
            component: AddressList,
            meta: {
                keepAlive: false,
            },
        },
        // 新增收获地址newAddress
        {
            path: '/newAddress',
            name: 'newAddress',
            component: NewAddress,
            meta: {
                keepAlive: false,
            },
        },

        // 订单结算payforOrder
        {
            path: '/payforOrder',
            name: 'payforOrder',
            component: PayforOrder,
            meta: {
                keepAlive: false,
            },
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: false,
            },
        },
        {
            path: '/sinup',
            name: 'sinup',
            component: Sinup,
            meta: {
                keepAlive: false,
            },
        },

        {
            name: 'detail',
            path: '/detail',
            component: Detail,
            meta: {
                keepAlive: false,
            },
        },
        {
            name: 'accman',
            path: '/accman',
            component: AccMang,
            meta: {
                keepAlive: false,
            },
        },
        {
            name: 'settings',
            path: '/settings',
            component: Settings,
            meta: {
                keepAlive: false,
            },
        },
        {
            name: 'message',
            path: '/message',
            component: Message,
            meta: {
                keepAlive: false,
            },
        },
        //我的卡包
        {
            path: '/card',
            name: 'card',
            component: Card,
            meta: {
                keepAlive: false,
            },
        },
        //我的订单
        {
            path: '/myorder',
            name: 'myorder',
            component: MyOrder,
            meta: {
                keepAlive: false,
            },
        },
    ],
});