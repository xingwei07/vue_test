<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习vue</li>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        opacity: 1
      }
    },
    beforeDestroy(){
      console.log('News组件即将被销毁了')
    },
    activated(){
      this.timer = setInterval(()=>{
        console.log('@')
        this.opacity -= 0.01
        if(this.opacity < 0) this.opacity = 1 
      },16)
      console.log('News组件被激活了')
    },
    deactivated(){
      clearInterval(this.timer)
      console.log('News组件失活了')
    }
  }
</script>