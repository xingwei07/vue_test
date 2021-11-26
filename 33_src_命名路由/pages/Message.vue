<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            title:m.title
          }
        }"> -->
        <router-link :to="{
          name: 'detailName',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
  
</template>

<script>
  export default {
    name: 'Message',
    data(){
      return {
        messageList:[
          {id:'001', title:'message001'},
          {id:'002', title:'message002'},
          {id:'003', title:'message003'}
        ]
      }
    }
  }
</script>

<style>

</style>