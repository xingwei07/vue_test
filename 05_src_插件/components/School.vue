<template>
  <div>
    <h2>学校名称：{{name | myFilter}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试一下hello</button>
  </div>
</template>

<script> 
  export default {
    name:'School',
    data(){
      return {
        name:'尚硅谷111',
        address:'北京昌平'
      }
    },
    methods:{
      test(){
        this.hello()
      }
    }
  }
</script>