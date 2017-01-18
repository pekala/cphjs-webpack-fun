var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
  },
  performance: {
    hints: "warning"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      }
    ]
  }
}
