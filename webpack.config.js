const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'static/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};
