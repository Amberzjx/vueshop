/**
 * 入口文件
 */
import Vue from 'vue'
import App from './App';
import router from './router/index'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(router)
Vue.use(Vuex)

const store = new Vuex.Store({//状态管理
    state:{
        leftMenu:true
    }
    , getters:{

    }
    , actions: {
        visableLeftMenu(context,status){
            context.commit( 'visableLeftMenu', status );
        }
    }
    , mutations:{
        visableLeftMenu(state,status){
            state.leftMenu = status
        }
    }
})

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)  //用箭头函数 等于以下写法
    /*render (h) {
        return h(App)
    }*/

})
