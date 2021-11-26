<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todo" @keydown.enter="add" />
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name:'MyHeader',
    // props:['addTodo'],
    data(){
      return {
        todo:''
      }
    },
    methods:{
      add(){
        //判断是否为空-去掉首尾空格
        if(!this.todo.trim()) return
        //定义数据
        const todoObj = {
          id: nanoid(),
          title: this.todo.trim(),
          status: false
        }
        // //调用vm的addTodo方法
        // this.addTodo(todoObj)
        this.$emit('addTodo',todoObj)
        //清空输入框
        this.todo = ''
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