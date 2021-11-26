<template>
  <div>
    <button @click="getStudentMsg">请求学生信息</button>
    <button @click="getCarMsg">请求汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name:'App',
    methods:{
      getStudentMsg(){
        axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
        )
      },
      getCarMsg(){
        axios.get('http://localhost:8080/foo/cars').then(
          response => {
            console.log('请求成功了',response.data)
          },
          error => {
            console.log('请求失败了',error.message)
          }
        )
      }
    }
  }
</script>