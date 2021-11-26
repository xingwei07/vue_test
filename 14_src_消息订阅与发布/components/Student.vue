<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">将学生姓名传递给School组件</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        sex:'男'
      }
    },
    methods:{
      sendStudentName(){
        // this.$bus.$emit('atguigu',this.name)
        pubsub.publish('hello',this.name) //发布hello消息
      }
    }
  }
</script>

<style lang="css">
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 20px;
  }
</style>