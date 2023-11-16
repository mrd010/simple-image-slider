const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
