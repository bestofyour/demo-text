const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./config/config.base');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/',
    path: resolve('dist'),
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name].[hash:8].chunk.js',
  },

  devServer: {
    host: '0.0.0.0',
    port: '6666',
    progress: true,
    compress: true,
    inline: true,
    hot: true,
  },
});
