<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和放大10倍为：{{bigSum}}</h1>
    <h1>我在{{school}}，学习{{subject}}</h1>
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
      //借助mapState生成计算属性，从state中读取数据。（对象写法）
      // ...mapState({sum:'sum', school:'school', subject:'subject'}),

      //借助mapState生成计算数据，从state中读取数据。（数组写法）
      ...mapState(['sum','school','subject']),

      /***************************************************************/

      //借助mapGeeter生成计算属性，从getters中读取数据。（对象写法）
      // ...mapGetters({bigSum:'bugSum'})

      //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
      ...mapGetters(['bigSum'])
    },
    methods:{
      //程序员亲自写方法
      // increment(){
      //   this.$store.commit('JIA',this.number)
      // },
      // decrement(){
      //   this.$store.commit('JIAN',this.number)
      // },

      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations({increment:'JIA', decrement:'JIAN'}),

      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
      // ...mapMutations(['JIA','JIAN']),

      /* ************************************************************ */
      
      //程序员亲自写方法
      // incrementOdd(){
      //   this.$store.dispatch('jiaOdd',this.number)
      // },
      // incrementWait(){
      //   this.$store.dispatch('jiaWait',this.number)
      // }

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
      ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
      // ...mapActions(['jiaOdd','jiaWait'])
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>