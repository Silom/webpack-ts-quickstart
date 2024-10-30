const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
// For env vars check below
//const Dotenv = require("dotenv-webpack")

module.exports = (env) => ({
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "." },
        { from: "src/index.css", to: "." },
      ],
    }),
    // In case you need to pass env specific vars to the bundle
    // new Dotenv({
    //   path: env.ghpage ? "./ghpage.env" : "dev.env",
    // }),
  ],
})
