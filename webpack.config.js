const path=require('path');

const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, "build")
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
                    options: {
                     
                      limit: 8192 // in bytes
                    },
                  },
                ],
              },
        ]
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
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}