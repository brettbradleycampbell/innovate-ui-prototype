const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin'); // Webpack templating -- https://github.com/colbyfayock/html-webpack-partials-plugin
module.exports = {
  entry: ['./app.scss', './app.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      }
    ],
  },
  // plugins: [
  //   // new HtmlWebpackPlugin(),
  //   // new HtmlWebpackPartialsPlugin({
  //   //   path: './partials/body.html'
  //   // })
  // ]
};


