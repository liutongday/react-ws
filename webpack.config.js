var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: {
        'index': [
            './demo/index'
        ],
        'site': './site/layout/index',
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ],
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'moment': 'moment',
        'underscore': 'underscore',
        'react-bootstrap': 'react-bootstrap'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-ws.js',
        library: 'ReactWS',
        libraryTarget: 'umd',
        chunkFilename: '[name].chunk.js',
        publicPath: '/react-ws/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('react-ws.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css!postcss!less'
        },{
            test: /\.(jpg|png)$/,
            loader: "url?limit=8192"
        }]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};
