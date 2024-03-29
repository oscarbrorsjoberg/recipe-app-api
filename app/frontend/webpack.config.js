const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		javascript: './src/index.js',
		html: './templates/frontend/index.html'
	}
	output: {
		path: './dist/',
		filename: 'bundle.js',
	}
  // entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "./static/frontend"),
  //   filename: "[name].js",
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //       },
  //     },
  //   ],
  // },
  // optimization: {
  //   minimize: true,
  // },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       // This has effect on the react lib size
  //       NODE_ENV: JSON.stringify("development"),
  //     },
  //   }),
  // ],
};
