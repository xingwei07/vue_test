<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="add">年龄增加</button>
    <button @click="send">给APP传递姓名</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前student组件的实例(vc)</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        sex:'男',
        age:18
      }
    },
    methods: {
      add(){
        this.age++
        console.log('年龄增加了');
      },
      send(){
        //触发绑定事件
        this.$emit('atguigu',this.name,300,500,800)
        // this.$emit('show')
        this.$emit('click')
      },
      unbind(){
        this.$off('atguigu') //解绑一个自定义事件
        // this.$off(['atguigu','show']) //解绑多个自定义事件
        // this.$off() //解绑所有自定义事件
      },
      death(){
        this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
        console.log('vc被销毁了')
      }
    },
  }
</script>

<style lang="css">
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 20px;
  }
</style>