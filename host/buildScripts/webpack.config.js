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
        use: ['babel-loader'],
        exclude: /[\/]node_modules[\/]/i
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
    new ModuleFederationPlugin({
      name: "hostApp",
      // remotes: {
      //   // Based upon the env put the actual url here
      //   RemoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
      // },
      shared: {
        react: { singleton: true, eager: true},
        "react-dom": { singleton: true, eager: true}
      }
    })
  ]
}