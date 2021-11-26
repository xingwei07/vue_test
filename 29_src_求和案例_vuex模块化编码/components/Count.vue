<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和放大10倍为：{{bigSum}}</h1>
    <h1>我在{{school}}，学习{{subject}}</h1>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(number)">+</button>
    <button @click="decrement(number)">-</button>
    <button @click="incrementOdd(number)">求和为奇数时再加</button>
    <button @click="incrementWait(number)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name:'Count',
    data(){
      return {
        number: 1 //选择的值
      }
    },
    computed:{
      //借助mapState生成计算数据，从state中读取数据。（数组写法）
      ...mapState('countAbout',['sum','school','subject']),
      ...mapState('personAbout',['personList']),

      //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
      ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations('countAbout',{increment:'JIA', decrement:'JIAN'}),

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
      ...mapActions('countAbout',{incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>