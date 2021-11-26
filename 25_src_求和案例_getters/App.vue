<template>
  <div>
    <Count />
  </div>
</template>

<script>
  import Count from './components/Count'

  export default {
    name:'App',
    components:{
      Count
    },
    mounted(){
      // console.log(this)
    },
  }
</script>