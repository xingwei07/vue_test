<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__tada"
      leave-active-class="animate__zoomOut"
    > <!-- appear：加载时显示动画 -->
      <h1 v-show="show" key="1">你好啊</h1>
      <h1 v-show="!show" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'

  export default {
    name:'Test2',
    data(){
      return {
        show:true
      }
    }
  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
</style>