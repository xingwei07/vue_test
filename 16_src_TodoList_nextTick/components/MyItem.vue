<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.status" @change="editStatus(todoObj.id)" />
      <!-- 不建议修改props中的内容 -->
      <!-- <input type="checkbox" v-model="todoObj.status" /> -->
      <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
      <input 
        type="text" 
        v-show="todoObj.isEdit" 
        :value="todoObj.title"
        @blur="handleBlur(todoObj,$event)"
        ref="newTitle"
      >
    </label>
    <button class="btn btn-danger" @click="del(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="editTitle(todoObj)">修改</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name:'MyItem',
    // props:['todoObj','editStatus','delTodo'],
    props:['todoObj'],
    methods:{
      //修改状态
      editStatus(id){
        //通知APP组件将对应的todo对象的status值取反
        // this.editStatus(id)
        console.log(this)
        this.$bus.$emit('editStatus',id)
      },
      //删除
      del(id){
        if(confirm('是否删除数据')) {
          // this.delTodo(id) //函数名
          //通知APP组件将对应的todo对象删除
          //  this.$bus.$emit('delTodo',id) //自定义事件的事件名

          //发布消息
          pubsub.publish('delTodo',id) //订阅消息的消息名
        }
      },
      editTitle(todoObj){
        if(todoObj.hasOwnProperty('isEdit')) {
          todoObj.isEdit = true
        } else {
          this.$set(todoObj,'isEdit',true)
        }
        this.$nextTick(function(){
          this.$refs.newTitle.focus()
        })
      },
      //失去焦点
      handleBlur(todoObj,e){
        this.todoObj.isEdit = false
        if(!e.target.value.trim()) return alert('数据不能为空')
        this.$bus.$emit('editTitle',todoObj.id,e.target.value)
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
    margin-left: 5px;
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