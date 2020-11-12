const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mpvue-calendar/' : '/',
  configureWebpack: {
    context: path.resolve(__dirname, './'),
    entry: {
      app: './example/main.js'
    },
  },
  devServer: {
      port: '3030',
      host: 'localhost',
      https: false,
      open: true,
      hot: true,
      disableHostCheck: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
