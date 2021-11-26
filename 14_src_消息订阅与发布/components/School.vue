<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷',
        address:'北京昌平'
      }
    },
    mounted(){
      // //绑定自定义组件
      // this.$bus.$on('atguigu',(name)=>{
      //   console.log(name)
      // })

      //订阅hello消息，一旦有人发布就执行回调
      this.pubName = pubsub.subscribe('hello',(magName,data)=>{
        console.log('有人发布了hello消息，hello消息的回调执行了',magName,data)
      })
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pubName) //取消订阅
    }
  }
</script>

<style lang="css">
  .school {
    background-color: orange;
    padding: 5px;
  }
</style>