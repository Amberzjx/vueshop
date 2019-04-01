/*
路由器对象模块
 */
import Vue from 'Vue'
import VueRouter from 'vue-router'

//引入组件
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            components:Msite
        },
        {
            path:'/order',
            components:Order
        },
        {
            path:'/profile',
            components:Profile
        },
        {
            path:'/search',
            components:Search
        },
        {
            path:'/',
            components:Msite
        },
    ]
})