<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="send">给APP传递学校名称</button>
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
    props:['getSchoolName'],
    methods: {
      send(){
        this.getSchoolName(this.name)
      }
    },
  }
</script>

<style lang="css">
  .school {
    background-color: orange;
    padding: 5px;
  }
</style>