<template>
  <ul class="todo-main">
    <MyItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      :editStatus="editStatus"
      :del="del"
    />
  </ul>
</template>

<script>
  import MyItem from './MyItem'

  export default {
    name:'MyList',
    props:['todos','editStatus','del'],
    components:{
      MyItem
    }
  }
</script>

<style scoped>
  /* main */
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>