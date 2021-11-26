<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.status" @change="edit(todoObj.id)" />
      <!-- 不建议修改props中的内容 -->
      <!-- <input type="checkbox" v-model="todoObj.status" /> -->
      <span>{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="del(todoObj.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name:'MyItem',
    // props:['todoObj','editStatus','delTodo'],
    props:['todoObj'],
    methods:{
      //修改状态
      edit(id){
        //通知APP组件将对应的todo对象的status值取反
        // this.editStatus(id)
        this.$bus.$emit('editStatus',id)
      },
      //删除
      del(id){
        if(confirm('是否删除数据')) {
          //通知APP组件将对应的todo对象删除
         this.$bus.$emit('delTodo',id)
        }
      }
    }
  }
</script>

<style scoped>
  /* item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>