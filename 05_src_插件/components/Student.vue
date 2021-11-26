<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2 @click="add">学生年龄：{{age}}</h2>
    <input type="text" v-fbind:value="age">
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        age:18
      }
    }
  }
</script>