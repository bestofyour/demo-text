const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,  //是否启用文件缓存
      parallel: true   //使用多进程并行运行来提高构建速度
    })
  ]
};
