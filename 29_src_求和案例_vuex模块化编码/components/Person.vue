<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人人，名字随机</button>
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
        return this.$store.state.personAbout.personList
      },
      sum(){
        return this.$store.state.countAbout.sum
      },
      firstPersonName(){
        return this.$store.getters['personAbout/firstPersonName']
      }
    },
    methods:{
      add(){
        const person = {
          id: nanoid(),
          name: this.name
        }
        this.$store.commit('personAbout/ADD_PERSON',person)
        this.name = ''
      },
      addWang(){
        this.$store.dispatch('personAbout/addWang',{id:nanoid(),name:this.name})
        this.name = ''
      },
      addPersonServer(){
        this.$store.dispatch('personAbout/addPersonServer')
      }
    }
  }
</script>

<style>

</style>