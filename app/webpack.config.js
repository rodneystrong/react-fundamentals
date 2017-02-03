var HtmlWebpackPlugin = require('html-webpack-plugin');
//what this does is put our index.html into the 'dist' folder with our index_bundle.js
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  //the file we want you to tranfer to 'dist', the template we want you to use
  //is 'index.html'
  template: __dirname + '/app/index.html',
  //the filename we want you to call it is 'index.html'
  filename: 'index.html',
  //anything you inject, we want you to inject it into the body
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  //the plugin we're adding is the HtmlWebpackPluginConfig variable we made just at the
  //top of this file.
  plugins: [HtmlWebpackPluginConfig]
}
