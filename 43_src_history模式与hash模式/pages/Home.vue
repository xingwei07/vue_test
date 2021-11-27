<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="list-group-item" active-class="active">News</router-link>
        </li>
        <li>
          <router-link to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        </li>
      </ul>
      <!-- 缓存一个路由组件 -->
      <!-- <keep-alive include="News">
        <router-view></router-view>
      </keep-alive> -->

      <!-- 缓存多个路由组件 -->
      <keep-alive :include="['News','Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted(){
      // console.log('Home被挂载了')
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    },
    // beforeDestroy(){
    //   console.log('Home被销毁了')
    // }
  }
</script>