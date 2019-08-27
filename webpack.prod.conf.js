const webpack = require('webpack');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require("webpack-merge");
//压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig,{
    devtool: 'cheap-module-eval-source-map',
    plugins:[
        new OptimizeCssAssetsPlugin(),
    ]
})

module.exports = prodWebpackConfig

