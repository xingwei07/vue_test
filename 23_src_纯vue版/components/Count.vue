<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
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
        sum: 0, //和
        number: 1 //选择的值
      }
    },
    methods:{
      increment(){
        this.sum += this.number
      },
      decrement(){
        this.sum -= this.number
      },
      incrementOdd(){
        if(this.sum % 2){
          this.sum += this.number
        }
      },
      incrementWait(){
        setTimeout(()=>{
          this.sum += this.number
        },500)
      }
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>