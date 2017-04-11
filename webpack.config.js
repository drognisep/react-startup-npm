var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'dev');
var BUILD_DIR = path.resolve(__dirname, 'output');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }]
    }
};


module.exports = config;