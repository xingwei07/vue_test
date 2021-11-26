<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{isChecked}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="delAllChecked">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
    // props:['todos','checkAllTodo','delAllChecked'],
    props:['todos'],
    computed:{
      //总数量
      total(){
        return this.todos.length
      },
      //已选择数量
      isChecked(){
        return this.todos.reduce((pre,todo)=>{
          return pre + (todo.status ? 1 : 0)
        }, 0)
      },
      // //是否全选
      // isAll(){
      //   return this.total === this.isChecked && this.total > 0
      // }
      isAll:{
        get(){
          return this.total === this.isChecked && this.total > 0
        },
        set(value){
          // this.checkAllTodo(value)
          this.$emit('checkAllTodo',value)
        }
      }
    },
    methods:{
      // checkAll(e){
      //   this.checkAllTodo(e.target.checked)
      // },
      delAll(){
        // this.delAllChecked()
        this.$emit('delAllChecked')
      }
    }
  }
</script>

<style scoped>
  /* footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>