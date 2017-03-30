const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './client/index.js'),
    thread: path.resolve(__dirname, './client/thread.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
}