const path=require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].[chunkhash].bundle.js',

      },
    module:{
        rules:[
            {
                test: /.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  
                  },
                ],
              },
        ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules\/(?!antd\/).*/,
            name: "vendors",
            chunks: "all",
          },
          // This can be your own design library.
          antd: {
            test: /node_modules\/(antd\/).*/,
            name: "antd",
            chunks: "all",
          },
        },
      },
      runtimeChunk: {
        name: "manifest",
      },
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: './',
        hot: true
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new CompressionPlugin({
          test: /\.js(\?.*)?$/i,
        }),
    ]
}