var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.js',

    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',    //resource path for localhost
        filename: 'bundle.js'  //bundled file name
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
        ]
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8181
    }

};