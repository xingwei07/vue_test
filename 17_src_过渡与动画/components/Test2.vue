<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <transition-group name="test" appear> <!-- appear：加载时显示动画 -->
      <h1 v-show="show" key="1">你好啊</h1>
      <h1 v-show="!show" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
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
    /* transition: 0.5s linear; */
  }

  /* 进入的起点 离开的终点 */
  .test-enter, .test-leave-to {
    transform: translateX(-100%);
  }

  .test-enter-active, .test-leave-active {
    transition: 0.5s linear;
  }

  /* 进入的终点 离开的起点 */
  .test-enter-to, .test-leave {
    transform: translateX(0);
  }
</style>