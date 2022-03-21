<template>
  <div>
      <div class="row">
        <Banner />
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始html中使用a标签实现页面的跳转 -->
            <!-- <a href="./about.html" class="list-group-item active">About</a> -->
            <!-- <a href="./home.html" class="list-group-item">Home</a> -->
            
            <!-- Vue中借助router-link标签实现路由的切换  -->
            <router-link to="/about" class="list-group-item" active-class="active">About</router-link>
            <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 指定组件的呈现位置 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Banner from './components/Banner'
  export default {
    name:'App',
    components:{
      Banner
    }
  }
</script>