const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./config.base');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: '3000',
    hot: true,
  },
  output: {
    publicPath: '/',
    path: resolve('dist'),
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name].[hash:8].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
});
