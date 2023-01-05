// webpack.config.base.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
      mock: path.resolve(__dirname, '../mock'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mind mapping',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
  ],
  cache: {
    type: 'filesystem',
    // 可选配置
    buildDependencies: {
      config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    },
    name: 'development-cache',
  },
};
