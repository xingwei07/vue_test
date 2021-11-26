// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name:'aboutName',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              name:'detailName',
              //path:'detail/:id/:title', //params形式参数
              path:'detail', //query形式参数
              component:Detail,

              // props的第一种写法，值为对象，该对象中所有key-value都会以props的形式传给Detail组件。
              // props:{
              //   id:666,
              //   title:'你好'
              // }
              
              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
              // props:true

              // props的第三种写法，值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title
                }
              }
              // props({query}){ //解构赋值
              //   return {id:query.id,title:query.id}
              // }
              // props({query:{id,title}}){ //解构赋值的连续写法
              //   return {id,title}
              // }
            }
          ]
        }
      ]
    }
  ]
})