//引入Vue
import Vue from 'vue'

//引入app
import App from './App'

//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引人ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Row,Button,DatePicker } from 'element-ui'

Vue.component('atguigu-row', Row )
Vue.component(Button.name, Button )
Vue.component(DatePicker.name, DatePicker )

//关闭vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);

//创建vm
new Vue({
    el:'#app',
    render: h => h(App),
})