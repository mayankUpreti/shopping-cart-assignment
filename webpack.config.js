const path=require('path')
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
              }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
      },
    resolve: {
        extensions: ['.js', '.jsx']
      },
   
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}