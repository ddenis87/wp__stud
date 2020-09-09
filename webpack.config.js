const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCSS = require('mini-css-extract-plugin')
const webpack = require('webpack')

const PATHS = {
  source: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

module.exports = {
  mode:'development',
  entry: {
    index: './src/index.js',
    room: './src/room.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss$/,
        use: [miniCSS.loader , 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATHS.source + '/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'room.html',
      template: PATHS.source + '/room.pug',
    }),
    new miniCSS({
      filename: 'style.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}