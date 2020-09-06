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
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
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
      template: PATHS.source + '/index.pug'
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