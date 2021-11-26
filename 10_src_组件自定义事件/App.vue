<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"  />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu="getStudentName" @show="m1" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student" @click="demo" /> 所有绑定的事件都当做自定义事件 -->
    <Student ref="student" @click.native="test" /> <!-- 加上native会解析为原生dom事件 -->

  </div>
</template>

<script>
  import Student from './components/Student'
  import School from './components/School'

  export default {
    name:'App',
    data() {
      return {
        msg:'你好啊！'
      }
    },
    components:{
      Student,
      School
    },
    methods: {
      getSchoolName(name){
        console.log("获取到了学校名称",name)
      },
      //第一个参数使用name正常接，其余的参数整理到a数组里
      getStudentName(name,...params){
        console.log('获取到了学生姓名',name,params)
      },
      m1(){
        console.log('m1被调用了');
      },
      demo(){
        console.log('demo被触发了')
      },
      test(){
        alert(123)
      }
    },
    mounted(){
      //等待3秒钟后绑定自定义事件
      // setTimeout(()=>{
        this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件 
      //   // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件 只允许触发一次
      // },3000)
    }
  }
</script>

<style lang="css">
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>