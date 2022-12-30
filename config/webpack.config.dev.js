const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devServer = {
  hot: true,
  host: '127.0.0.1',
  port: 3000,
  compress: true,
  open: true,
  // inline: true,
  historyApiFallback: true,
  // proxy: {
  //   '/': {
  //     target: 'http://1.116.165.46:3000',
  //     changeOrigin: true,
  //   },
  // },
};

const devConfig = {
  mode: 'development',
  devServer: devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
