<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList 
          :todoArr="todos"
          :editStatus="editStatus"
          :delTodo="delTodo"
        />
        <MyFooter 
          :todoArr="todos" 
          @checkAllTodo="checkAllTodo" 
          @delCheckedTodo="delCheckedTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'

  export default {
    name:'App',
    components:{
      MyHeader,
      MyList,
      MyFooter
    },
    data(){
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        // len:0
      }
    },
    methods:{
      //新增
      addTodo(todo){
        this.todos.unshift(todo)
      },
      editStatus(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.status = !todo.status
        })
      },
      //删除一条数据
      delTodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      //全选/取消全选
      checkAllTodo(flag){
        this.todos.forEach((todo)=>{
          todo.status = flag
        })
      },
      //清除已完成数据
      delCheckedTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.status
        })
      }
    },
    watch:{
      todos:{
        deep: true,
        handler(newValue){
          localStorage.setItem('todos',JSON.stringify(newValue))
        }
      }
    }
  }
</script>

<style>
  /* base */
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>