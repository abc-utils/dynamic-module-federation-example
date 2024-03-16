const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
})