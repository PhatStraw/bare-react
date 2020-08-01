const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const path = require( 'path' );
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
         test:/\.html$/,
         use: [
             {
                 loader: "html-loader"
             }
         ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.resolve( __dirname, 'public/index.html' ),
          filename: 'index.html'
        }),
        new Dotenv()
    ]
  };
