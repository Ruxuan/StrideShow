var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/app/strideshow.js')
  ],
  output: {
    path: path.join(__dirname, '../src/public/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../src/app/'),
        query: {
          cacheDirectory: true,
          babelrc: false,
          presets:["es2015", "react", "stage-0"],
          plugins:["transform-runtime"]
        }
      },
      // CSS
      {
        test: /\.scss$/,
        loaders: ['style','css','sass'],
        include: path.join(__dirname, '../src/app'),
      }
    ]
  }
};
