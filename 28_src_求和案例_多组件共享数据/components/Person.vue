<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
    <input type="text" v-model="name"><button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name: 'Person',
    data(){
      return {
        name: ''
      }
    },
    computed:{
      personList(){
        return this.$store.state.personList
      },
      sum(){
        return this.$store.state.sum
      }
    },
    methods:{
      add(){
        const person = {
          id: nanoid(),
          name: this.name
        }
        this.$store.commit('ADD_PERSON',person)
        this.name = ''
      }
    }
  }
</script>

<style>

</style>