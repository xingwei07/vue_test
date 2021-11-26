//引入Vue
import Vue from 'vue'
//引入app
import App from './App'

//引入插件
import plugins from './plugins'

//关闭vue的生产提示
Vue.config.productionTip = false

//应用(使用)插件
Vue.use(plugins)

//创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})