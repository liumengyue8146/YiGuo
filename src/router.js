import Vue from 'vue';
import Router from 'vue-router';
import BeforeLogin from './views/beforeLogin';
import Home from './views/home/Home.vue'
import Category from './views/home/category/index.vue'
import Eat from './views/home/eat/index.vue'
import Cart from './views/home/cart/index.vue'
import Me from './views/home/me/index.vue'
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'beforeLogin',
            component: BeforeLogin,
        },
        {

            //分类
            name: 'category',
            path: '/category',
            component: Category,
            meta: {
                keepAlive: true,
            },

        },
        {
            path: '/home',
            name: 'home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ './views/home/Home.vue'),
            component: Home,
            meta: {
                keepAlive: true,
            },
            children: [
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
    ],
});