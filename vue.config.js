module.exports = {
  lintOnSave: false, //关闭语法检查
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'/api':''}, //重写路径
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求中的host值
      },
      '/foo': {
        target: 'http://localhost:5001',
        pathRewrite: {'/foo':''}, //重写路径
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求中的host值
      }
    }
  }
}