const webpack = require('webpack');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require("webpack-merge");

const devWebpackConfig = merge(baseWebpackConfig,{
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: {
            index: path.resolve(__dirname, '/index.html')
        },
        inline: true, //实时刷新
        port: 3000,
    },
})

module.exports = devWebpackConfig

