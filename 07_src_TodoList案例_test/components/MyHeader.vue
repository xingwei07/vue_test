<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo" v-model="todoTitle" />
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name:'MyHeader',
    data(){
      return {
        todoTitle: ''
      }
    },
    // props:['add'],
    methods:{
      //添加待办
      addTodo(){
        if(!this.todoTitle.trim()) return
        const todoObj = {
          id: nanoid(),
          title: this.todoTitle.trim(),
          status: false
        }
        //将todoObj提交给APP
        // this.add(todoObj)
        this.$emit('add',todoObj)
        this.todoTitle = ''
      }
    }
  }
</script>

<style scoped>
  /* header */
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>