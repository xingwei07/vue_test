//引入Vue
import Vue from 'vue'
//引入app
import App from './App'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})