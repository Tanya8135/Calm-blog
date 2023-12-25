const path = require('path');
// const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

// const filesDir = './src/partials';
// const files = fs.readdirSync(filesDir);

// const htmlPlugins = files.map(file => {
//     return new HtmlWebpackPlugin({
//         template: `./src/partials/${file}`,
//         filename: file.replace('.html', '.ejs'),
//         inject: 'body',
//         content: file.replace('.html', ''),
//     })
// })

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
        // ...htmlPlugins,
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
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
