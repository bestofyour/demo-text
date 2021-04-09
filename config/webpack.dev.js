const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./config.base');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: '3050',
    hot: true,
  },
  entry: path.join(__dirname, '../', 'src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
});
