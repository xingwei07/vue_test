//求和相关的配置
export default {
  namespaced:true,
  actions: {
    jiaOdd(context,value){
      console.log('jiaOdd被调用了')
      if(context.state.sum % 2){
        context.commit('JIA',value)
      }
    },
    jiaWait(context,value){
      console.log("jiaWait被调用了")
      setTimeout(()=>{
        context.commit('JIA',value)
      },500)
    }
  },
  mutations:{
    JIA(state,value){
      console.log('JIA被调用了')
      state.sum += value
    },
    JIAN(store,value){
      console.log('JIAN被调用了')
      store.sum -= value
    }
  },
  state:{
    sum:0, //和
    school: '尚硅谷',
    subject: '前端'
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
}