const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, './src/main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: path.join(__dirname, 'node_modules') },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /.(png|jpg|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]&esModule=false'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }]
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlPlugin({ template: 'public/index.html' }),
    // eslint-disable-next-line new-cap
    new vueLoaderPlugin()
  ]

}
