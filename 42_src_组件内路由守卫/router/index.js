// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router =  new VueRouter({
  mode:'history',
  routes: [
    {
      name:'aboutName',
      path: '/about',
      component: About,
      meta:{
        title: '关于',
        isAuth: true
      }
    },
    {
      name: 'homeName',
      path: '/home',
      component: Home,
      meta:{
        title: '首页'
      },
      children:[
        {
          name: 'newsName',
          path: 'news',
          component: News,
          meta:{
            isAuth: true,
            title: '新闻'
          },
          beforeEnter: (to,from,next)=>{
            console.log('独享路由守卫')
            if(localStorage.getItem('school') == 'atguigu'){
              next()
            } else {
              alert('没有权限！')
            }
          }
        },
        {
          name: 'messageName',
          path: 'message',
          component: Message,
          meta:{
            isAuth: true,
            title: '消息'
          },
          children:[
            {
              name:'detailName',
              //path:'detail/:id/:title', //params形式参数
              path:'detail', //query形式参数
              component:Detail,
              meta: {
                isAuth: true,
                title: '详情'
              },

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

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next)=>{
//   console.log('前置路由守卫',to, from)
//   if(to.meta.isAuth){
//     if(localStorage.getItem('school') == 'atguigu') {
//       next()
//     } else {
//       alert('无权限访问！')
//     }
//   } else {
//     next()
//   }
// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, after)=>{
  console.log('后置路由守卫',to,after)
  document.title = to.meta.title || '硅谷主页'
})

export default router