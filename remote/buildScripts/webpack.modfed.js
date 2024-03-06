const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist/mf'),
    // keep the public path as '/' or the actual pathname for production and the localhost with port for development
    publicPath: 'http://localhost:3001/',
    // filename: 'js/index.js',
  }
})