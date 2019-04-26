
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
}