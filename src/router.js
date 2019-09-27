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

import Zuomeishi from './views/home/eat/zuomeishi.vue'
import Zhangzhishi from './views/home/eat/zhangzhishi.vue'
import Shenghuojia from './views/home/eat/shenghuojia.vue'







Vue.use(Router);

export default new Router({
    routes: [
        //引导页路由
        // {
        //     path: '/',
        //     name: 'beforeLogin',
        //     component: BeforeLogin,
        //     meta: {
        //         keepAlive: true,
        //     },
        // },

        {
            path: '/',
            name: 'home',
            component: Homesmall,
            meta: {
                keepAlive: true,
            },
            // children: [{
            //         // 首页
            //         name: 'homesmall',
            //         path: '/homesmall',
            //         component: Homesmall,

            //     },
            //     {
            //         //分类
            //         name: 'category',
            //         path: '/category',
            //         component: Category,
            //     },
            //     //吃饭吧
            //     {
            //         name: 'eat',
            //         path: '/eat',
            //         component: Eat,
            //         meta: {
            //             keepAlive: true,
            //         },
            //         children: [{
            //                 name: 'zuomeishi',
            //                 path: '/zuomeishi',
            //                 component: Zuomeishi,
            //             },
            //             {
            //                 name: 'zhangzhishi',
            //                 path: '/zhangzhishi',
            //                 component: Zhangzhishi,
            //             },
            //             {
            //                 name: 'shenghuojia',
            //                 path: '/shenghuojia',
            //                 component: Shenghuojia,
            //             }
            //         ]
            //     },
            //     //购物车

            // ],


        },
        {
            //分类
            name: 'category',
            path: '/category',
            component: Category,
        },
        {
            //分类
            name: 'eat',
            path: '/eat',
            component: Eat,
            meta: {
                keepAlive: true,
            },
            children: [{
                    name: 'zuomeishi',
                    path: '/zuomeishi',
                    component: Zuomeishi,
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
                }
            ]
        },
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