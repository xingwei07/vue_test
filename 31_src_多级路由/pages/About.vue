<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name: 'About',
    mounted(){
      // console.log('About被挂载了')
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router
    },
    // beforeDestroy(){
    //   console.log('About被销毁了')
    // }
  }
</script>