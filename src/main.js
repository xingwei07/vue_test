//引入Vue
import Vue from 'vue'
//引入app
import App from './App'
//引入vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭vue的生产提示
Vue.config.productionTip = false

//使用路由器
Vue.use(VueRouter)

//创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    router
    // mounted(){
    //     setTimeout(()=>{
    //         this.$destroy()
    //     },3000)
    // }
})