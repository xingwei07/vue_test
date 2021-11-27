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
    // },
    beforeRouteEnter (to, from, next) {
      console.log('about——beforeRouteEnter',to,from)
      if(to.meta.isAuth){
        if(localStorage.getItem('school') == 'atguigu') {
          next()
        } else {
          alert('无权限！')
        }
      }
    },
    beforeRouteLeave (to, from, next) {
      console.log('About——beofreRouteLeave',to,from)
      next()
    }
  }
</script>