const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");


module.exports = {
  devtool: "inline-source-map",
  entry: ["./src/index.js", "./src/styles/bundle.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist")
  },
  module: {
    rules: [

      {
          test: /\.scss$/,
          use: [{
              loader: MiniCssExtractPlugin.loader
          },
              {
                  loader: "css-loader",
                  options: {
                      sourceMap: true,
                      modules: {
                          localIdentName: "[local]",
                      },
                  }
              },
              "sass-loader"
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "file-loader"
            }
        }
    ]
  },
  devServer: {
    contentBase: "./public/",
    watchContentBase: true,
    port: 1805,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "bundle.css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
