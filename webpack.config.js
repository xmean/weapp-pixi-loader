var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weapp-pixi-loader.js'
    },
    externals: {
        'pixi.js': 'pixi.js',
        'spark-md5': 'spark-md5'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: './babel.config.js'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};