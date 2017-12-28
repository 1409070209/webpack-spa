let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/index-hash.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase : "./dist",
        open : true,
        port: 8081,
        inline: true,
        compress: true,
        hot: true,
        overlay: true,
        clientLogLevel: "none",
        noInfo: true
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015','stage-1']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader?config=otherHtmlLoaderConfig"
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './img/[name].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.(mp3|mp4|avi|flv|f4v)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './video/[name].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.(woff2?|otf|eot|svg|ttf)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './font/[name].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/test.html'
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
