const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.tsx'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: `${__dirname}/../extension`,
    publicPath: '/',
    filename: 'riew.js',
    pathinfo: false,
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
