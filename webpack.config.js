var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        key: 'js',
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/,
      },
      {
        key: 'scss',
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
