const webpack = require('webpack');

module.exports = {
  // entry: ['regenerator-runtime/runtime', './src/index.js'],
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: `${__dirname}/../extension`,
    publicPath: '/',
    filename: 'riew.js',
  },
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
};
