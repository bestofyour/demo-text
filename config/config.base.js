const HappyPack = require('happypack');
const path = require('path');
const WebpackBar = require('webpackbar');
const Jarvis = require('webpack-jarvis');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const PurifyCssWebpack = require('purifycss-webpack') // 引入PurifyCssWebpack插件
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: ['babel-loader?cacheDirectory'] 之前是使用这种方式直接使用 loader
        // 现在用下面的方式替换成 happypack/loader，并使用 id 指定创建的 HappyPack 插件
        use: ['happypack/loader?id=babel'],
        // 排除 node_modules 目录下的文件
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HappyPack({
      /*
       * 必须配置
       */
      // id 标识符，要和 rules 中指定的 id 对应起来
      id: 'babel',
      // 需要使用的 loader，用法和 rules 中 Loader 配置一样
      // 可以直接是字符串，也可以是对象形式
      loaders: ['babel-loader?cacheDirectory'],
    }),

    new HtmlWebpackPlugin(
      Object.assign(
      {},
      {
        inject: true,
        template: path.join(__dirname, '../', 'public/index.html'),
      },
      {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }
    
  )),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new WebpackBar(),
    new DuplicatePackageCheckerPlugin(),
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new AddAssetHtmlPlugin(),

    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),

    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
    }),
  ],
};
