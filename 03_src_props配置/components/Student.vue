<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        msg:'我是一个尚硅谷的学生'
      }
    },
    methods: {
      updateAge(){
        this.age++
      }
    },
    // props:['name','age','sex'] //简单接收
    // props:{
    //   name: String,
    //   age: Number,
    //   sex: String
    // }
    props:{
      name:{
        type:String, //类型是String
        required:true //name是必要的
      },
      age:{
        type:Number,
        default:99 //默认值
      },
      sex:{
        type:String,
        required:true,
        default:'男'
      }
    }
  }
</script>