<template>
  <div>
    <Student name="张三" :age="20" sex="男" />
  </div>
</template>

<script>
  import Student from './components/Student.vue'

  export default {
    name:'App',
    components:{
      Student
    }
  }
</script>