const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIR  = path.resolve(__dirname);
const JS_DIR = path.resolve(ROOT_DIR, 'src');
const OUTPUT_DIR = path.resolve(ROOT_DIR, 'dist');


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    bail: false,
    target: 'web',
    stats: {
        children: false, // Stop CSS extraction from being so noisy
    },
    entry: {
        app: path.resolve(JS_DIR, 'app.jsx'),
    },
    output:{
        path: OUTPUT_DIR,
        library: ['ws', '[name]'],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [
            JS_DIR,
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [JS_DIR],
                options: {
                    cacheCompression: false,
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 2 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer()];
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [JS_DIR],
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        minimize: false,
        noEmitOnErrors: false,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    enforce: true,
                    priority: -10,
                },
            },
        },
    },
};
