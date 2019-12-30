const path = require('path')
const nicat = require(path.join(__dirname, '../src/nicat.js' ))
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let jsList = {}

nicat.entry.forEach(val=>{
  jsList[val.name] = path.join(__dirname, '../src', val.path )
})

module.exports = {
  mode: 'development',
  watch: true,
  entry: jsList,
  output: {
    filename: '[name].js',
    path: path.join( __dirname , '../www/js/'),
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../www/fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.join( __dirname , '../www/js/'),
    }),
  ],

}
