/**
 * 入口文件
 */
import Vue from 'vue'
import App from './App';
import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(router)

new Vue({
    el:'#app',
    router,
    render: h => h(App)  //用箭头函数 等于以下写法
    /*render (h) {
        return h(App)
    }*/

})
