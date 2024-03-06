const webpack = require('webpack')
const json5 = require('json5')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
            parse: json5.parse
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodePolyfillPlugin(),
    new ModuleFederationPlugin({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button'
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom" : {
          singleton: true
        }
      }
    })
  ]
}