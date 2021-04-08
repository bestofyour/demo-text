const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '6666',
    clientLogLevel: 'warning',
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
