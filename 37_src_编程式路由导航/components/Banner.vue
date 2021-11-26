<template>
  <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下to</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Banner',
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      test(){
        // this.$router.go(2) //前进两步
        this.$router.go(-2) //后退两步
      }
    }
  }
</script>