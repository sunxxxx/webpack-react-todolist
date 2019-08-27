const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
//清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
////提取css到单独文件 webpack4采用MiniCssExtractPlugin，ExtractTextPlugin已弃用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
    // mode: process.env.mode,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),    // 打包输出的目标文件的绝对路径（其中__dirname为当前目录的绝对路径）
        filename: 'index.js'   // 打包输出的js文件名及相对于dist目录所在路径
    },
    resolve:{
        alias:{
            '@src': path.resolve(__dirname, './src'),
            '@componets': path.resolve(__dirname,'./src/componets'),
            '@css': path.resolve(__dirname,'./src/css')
        }
    },
    devServer:{
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 3000,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                //打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        }
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
            // favicon: './src/img',
            // chunks: ['commons','index'], //限定加载特定模块
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
                caseSensitive:false,  //默认false。是否对大小写敏感，true为大小写敏感，false则大小写不敏感，会全部转为小写
                removeComment:true,//移除注释
                collapseWhitespace:false,//移除多余空格
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin(), //不传参默认删除未使用资源
        // new ExtractTextPlugin('style.css'),
        new MiniCssExtractPlugin({
            filename: '[name].css', //filename 是指在你入口文件entry中引入生成出来的文件名
            chunkFilename: '[id].css' //chunkname是指那些未被在入口文件entry引入，但又通过按需加载（异步）模块的时候引入的文件
        }),
        new OptimizeCssAssetsPlugin(),
        // 注意一定要在HtmlWebpackPlugin之后引用
        // inline 的name 和你 runtimeChunk 的 name保持一致
        new ScriptExtHtmlWebpackPlugin({
            //`runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
        })
    ]
};