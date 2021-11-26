//引入Vue
import Vue from 'vue'
//引入app
import App from './App'
//引入vueResource
import vueResource from 'vue-resource'
//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({ 
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})