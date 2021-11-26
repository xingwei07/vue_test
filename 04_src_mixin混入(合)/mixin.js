export const mixin = {
  methods: {
    showName(){
      alert(this.name)
    }
  }
}

export const mixin2 = {
  mounted(){
    console.log("加载完毕...")
  }
}