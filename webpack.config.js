const pathModule = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// __dirname+"/build"
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: pathModule.join(__dirname, "build"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
