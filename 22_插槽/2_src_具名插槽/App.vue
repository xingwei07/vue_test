<template>
  <div class="container">
    <Category title="食物">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <div slot="footer" class="footer">
        <a href="#">更多美食</a>
      </div>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template slot="footer">
        <div class="footer">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎欣赏</h4>
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
    },
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games: ['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films: ['《教父》','《拆弹专家》','《战狼》']
      }
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