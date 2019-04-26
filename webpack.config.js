
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const router = require("./src/router/index")

console.log(router);

let entrys = {};
let HtmlWebpackPlugins = [];

router.forEach(val=>{
    entrys[val.name] = val.path;

    HtmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: `${val.name}.html`,
            chunks: ['vendors', val.name],
        })
    )

})


module.exports = {
    mode: 'production',
    entry: entrys,
    plugins: HtmlWebpackPlugins.concat([
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('[name].css'),
    ]),
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            }
        ]
    }
}