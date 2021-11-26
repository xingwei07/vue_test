<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script> 
  export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷',
        address:'北京昌平'
      }
    },
    mounted(){
      //绑定自定义组件
      this.$bus.$on('atguigu',(name)=>{
        console.log(name)
      })
    }
  }
</script>

<style lang="css">
  .school {
    background-color: orange;
    padding: 5px;
  }
</style>