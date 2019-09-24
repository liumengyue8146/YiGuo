import Vue from 'vue';
import Router from 'vue-router';
import BeforeLogin from './views/beforeLogin';

import Home from './views/home/Home.vue'
import Homesmall from './views/home/homesmall/index.vue'
import Category from './views/home/category/index.vue'
import Eat from './views/home/eat/index.vue'
import Cart from './views/home/cart/index.vue'
import Me from './views/home/me/index.vue'
import Login from './views/Login.vue'
import Sinup from './views/Sinup.vue'



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

        {

            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                keepAlive: true,
            },
            children: [{
                    // 首页
                    name: 'homesmall',
                    path: '/homesmall',
                    component: Homesmall,

                },
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
        // 登录
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: true,
            },
        },
        //注册
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