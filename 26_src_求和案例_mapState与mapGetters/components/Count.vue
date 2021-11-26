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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name:'Count',
    data(){
      return {
        number: 1 //选择的值
      }
    },
    computed:{
      //亲自去写计算属性
      // sum(){
      //   return this.$store.state.sum
      // },
      // school(){
      //   return this.$store.state.school
      // },
      // subject(){
      //   return this.$store.state.subject
      // },

      //借助mapState生成计算属性，从state中读取数据。（对象写法）
      // ...mapState({sum:'sum', school:'school', subject:'subject'}),

      //借助mapState生成计算数据，从state中读取数据。（数组写法）
      ...mapState(['sum','school','subject']),

      /***************************************************************/

      //亲自写计算属性
      // bigSum(){
      //   return this.$store.getters.bigSum
      // }

      //借助mapGeeter生成计算属性，从getters中读取数据。（对象写法）
      // ...mapGetters({bigSum:'bugSum'})

      //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
      ...mapGetters(['bigSum'])
    },
    methods:{
      increment(){
        this.$store.commit('JIA',this.number)
      },
      decrement(){
        this.$store.commit('JIAN',this.number)
      },
      incrementOdd(){
        this.$store.dispatch('jiaOdd',this.number)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.number)
      }
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>