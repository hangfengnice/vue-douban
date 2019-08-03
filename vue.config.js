
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://douban.uieee.com/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ""
        }
      }
 
  }
}
}