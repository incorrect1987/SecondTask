const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports={
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.css$/,
            loader: 'babel-loader',
            use: [
                 MiniCssExtractPlugin.loader,
                 "css-loader"
             ]
        }]
    },
    devServer: {
        overlay: true
    }
}