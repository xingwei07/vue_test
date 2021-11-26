<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul> -->
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
  export default {
    name:'Category',
    props:['list','title']
  }
</script>

<style>
 h3 {
   background-color: orange;
   text-align: center;
 }
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
</style>