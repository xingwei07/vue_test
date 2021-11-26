<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
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
  export default {
    name:'Count',
    data(){
      return {
        number: 1 //选择的值
      }
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