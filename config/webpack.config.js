var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    app: './app/index',
    landlord: './app/landlord',
    community: './app/community'
  },
  output: {
    path: path.join(__dirname + 'public'),
    filename: '[name].js',
    chuckFilename: '[id].chuck.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
