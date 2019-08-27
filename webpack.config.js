const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
//清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
////提取css到单独文件 webpack4采用MiniCssExtractPlugin，ExtractTextPlugin已弃用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // mode: process.env.mode,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),    // 打包输出的目标文件的绝对路径（其中__dirname为当前目录的绝对路径）
        filename: 'index.js'   // 打包输出的js文件名及相对于dist目录所在路径
    },
    devServer:{
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 3003,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
        　　 　　   "css-loader"
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 2048,
                            name: '[name][hash].[ext]'
                        }
                    },
                    //文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader，url-loader封装了file-loader
                    // {
                    //     loader: 'file-loader',
                    //     publicPath: publicPath,
                    //     outputPath: 'dist/img',
                    //     useRelativePath: true
                    // }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            title: 'webpack demo',
            filename: 'index.html',
            // chunks: [], //限定加载特定模块
            // excludeChunks:[],  //排除特定模块
            // "files": {
                // "css": [ "main.css" ],
                // "js": [ "assets/head_bundle.js", "assets/main_bundle.js"],
                // "chunks": {
                //   "head": {
                //     "entry": "assets/head_bundle.js",
                //     "css": [ "main.css" ]
                //   },
                //   "main": {
                //     "entry": "assets/main_bundle.js",
                //     "css": []
                //   },
                // }
            // },
            template:path.resolve(__dirname, './src/index.html'),
            inject: true, //将js文件插入body的底部
            minify: {
                caseSensitive:false,
                removeComment:true,//移除注释
                collapseWhitespace:false//移除多余空格
            }
        }),
        new CleanWebpackPlugin(), //不传参默认删除未使用资源
        // new ExtractTextPlugin('style.css'),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // new OptimizeCssAssetsPlugin()
    ]
};