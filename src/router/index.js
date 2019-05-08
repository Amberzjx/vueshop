/*
路由器对象模块
 */
import Vue from 'Vue'
import VueRouter from 'vue-router'

//引入组件
import TZT from '../components/pages/403'
import BaseForm from '../components/pages/BaseForm'
import BaseTable from '../components/pages/BaseTable'
import Login from '../components/pages/Login'
import Markdown from '../components/pages/Markdown'
import Tabs from '../components/pages/Tabs'
import Upload from '../components/pages/Upload'
import VueEditor from '../components/pages/VueEditor'
import Dashboard from '../components/pages/Dashboard'
import Home from '../components/common/Home'

//声明使用插件

Vue.use(VueRouter);

export default new VueRouter({

    //所有路由
    routes:[
        {
            path:'/',
            components:Home,
            children:[
                {
                    path:'/dashboard',
                    components:Dashboard
                }
                ,{
                    path:'/basetable',
                    components:BaseTable
                }
                ,{
                    path:'/tabs',
                    components:Tabs
                }
                ,{
                    path:'/tabs',
                    components:Tabs
                }
                ,{
                    path:'/login',
                    components:Login
                }
                ,{
                    path:'/markdown',
                    components:Markdown
                }
                ,{
                    path:'/upload',
                    components:Upload
                }
                ,{
                    path:'/vueeditor',
                    components:VueEditor
                }
                ,{
                    path:'/403',
                    components:TZT
                }
            ]
        }
        ,{
            path:'/',
            components:BaseForm
        }
    ]
})