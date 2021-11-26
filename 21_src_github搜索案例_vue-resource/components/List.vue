<template>
  <div class="row">
    <h1 v-if="list.isWelcome">欢迎使用查询工具！</h1>
    <h1 v-show="list.isLoading">正在查询，请稍后...</h1>
    <h1 v-show="list.errorMsg">{{list.errorMsg}}</h1>
    <div class="card" v-for="user in list.userInfo" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" width="100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'List',
    data(){
      return {
        list: {
          isWelcome: true,
          isLoading: false,
          errorMsg: '',
          userInfo: []
        }
      }
    },
    mounted(){
      this.$bus.$on('userInfo',(retunData)=>{
        this.list = {...this.list, ...retunData}
      })
    }
  }
</script>

<style scpoed>
  .album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>