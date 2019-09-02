const webpack = require('webpack');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require("webpack-merge");
//压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig,{
    devtool: 'cheap-module-eval-source-map',
    plugins:[
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(), //不传参默认删除未使用资源
    ]
})

module.exports = prodWebpackConfig

