const path = require('path');

module.exports = {
  entry: ['./todos/app.jsx', './todos/app.less'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'todoapp.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'todos')]
  }
};
