const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)$/i,
                options: {
                    quality: 75,
                },
            }],
            overrideExtension: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' },
            ],
        }),
    ],
};


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//     entry: {
//         main: path.resolve(__dirname, './src/index.js'),
//     },
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     mode: 'development',
//     devtool: 'source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 // loader: 'raw-loader',
//                 use: [
//                     {
//                         loader: 'html-loader',
//                         options: {
//                             minimize: false,
//                             attributes: {
//                                 list: [
//                                     {
//                                         tag: 'img',
//                                         attribute: 'srcset',
//                                         type: 'src',
//                                     },
//                                     {
//                                         tag: 'img',
//                                         attribute: 'src',
//                                         type: 'src',
//                                     },
//                                 ],
//                             },
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                     },
//                 },
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                     },
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'postcss-loader',
//                 ],
//             },
//             {
//                 test: /\.module\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true,
//                         },
//                     },
//                     'postcss-loader',
//                 ],
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'postcss-loader',
//                     'sass-loader',
//                 ],
//             },
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             inject: 'body',
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'styles.css',
//         }),
//         new ImageminWebpWebpackPlugin({
//             config: [{
//                 test: /\.(jpe?g|png)$/i,
//                 options: {
//                     quality: 75,
//                 },
//             }],
//             overrideExtension: true,
//         }),
//         new CopyWebpackPlugin({
//             patterns: [
//                 { from: 'src/images', to: 'images' },
//             ],
//         }),
//         new CleanWebpackPlugin(), // Доданий CleanWebpackPlugin
//     ],
// };