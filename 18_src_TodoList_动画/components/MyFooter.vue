<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{fillChecked}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="delChecked">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
    // props:['todoArr','checkAllTodo','delCheckedTodo'],
    props:['todoArr'],
    // data() {
    //   return {
    //     checked: false
    //   }
    // },
    methods:{
      //删除已完成数据
      delChecked(){
        // this.delCheckedTodo()
        this.$emit('delCheckedTodo')
      },
      // //全选
      // checkAll(e){
      //   this.checkAllTodo(e.target.checked)
      // }
    },
    computed:{
      //计算已完成数量
      fillChecked(){
        return this.todoArr.reduce((pre,todo)=>{
          return pre + (todo.status ? 1 : 0)
        },0)
      },
      //计算全部数量
      total(){
        return this.todoArr.length
      },
      //计算checked的值
      isAll:{
        get(){
          return this.fillChecked === this.total && this.total > 0
        },
        set(value){  
          // this.checkAllTodo(value)
          this.$emit('checkAllTodo',value) //触发自定义组件
        }
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