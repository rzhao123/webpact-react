const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry: {
        app: './src/index.js'
    },
    mode: 'none',
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      inline:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     title: 'Production'
        //
        // }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
