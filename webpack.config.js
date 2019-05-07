const { join } = require('path')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill', // enables async-await
    './react/index.js',
  ],
  output: {
    path: join( __dirname, 'public'),
    filename: './bundle.js'
  },
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}

