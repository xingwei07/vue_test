<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="test" appear> <!-- appear：加载时显示动画 -->
      <h1 v-show="show">你好啊</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'Test',
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
  
  /* 默认名称 */
  /* .v-enter-active {
    animation: atguigu 0.5s linear;
  }

  .v-leave-active {
    animation: atguigu 0.5s linear reverse;
  } */

  /* 自定义名称 */
  .test-enter-active {
    animation: atguigu 0.5s linear;
  }

  .test-leave-active {
    animation: atguigu 0.5s linear reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }

    to{
      transform: translateX(0px);
    }
  }
</style>