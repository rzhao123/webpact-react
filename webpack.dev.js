const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        publicPath: "/dist/",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        inline:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
