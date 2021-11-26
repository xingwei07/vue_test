<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
          <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
  import Category from './components/Category'

  export default {
    name:'App',
    components:{
      Category
    }
  }
</script>

<style lang="css" scoped>
  .container, .footer {
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 200px;
  }

  video {
    width: 200px;
  }

  h4 {
    text-align: center;
  }
</style>