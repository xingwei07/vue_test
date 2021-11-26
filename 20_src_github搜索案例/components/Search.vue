<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWords" type="text" placeholder="enter the name your search" />&nbsp;
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import axois from 'axios'

  export default {
    name:'Search',
    data(){
      return {
        keyWords: ''
      }
    },
    methods:{
      //发送请求
      search(){
        this.$bus.$emit('userInfo',{isWelcome:false, isLoading:true, errorMsg:'', userInfo:[]})
        axois.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
          response => {
            console.log('请求成功了')
            this.$bus.$emit('userInfo',{isLoading:false, userInfo:response.data.items})
          },
          error => {
            console.log('请求出错了：',error.message)
            this.$bus.$emit('userInfo',{isLoading:false, userInfo:[], errorMsg:error.message})
          }
        )
      }
    }
  }
</script>

<style>

</style>