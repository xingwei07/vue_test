<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">将学生姓名传递给School组件</button>
  </div>
</template>

<script>
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
        console.log(this)
        this.$bus.$emit('atguigu',this.name)
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