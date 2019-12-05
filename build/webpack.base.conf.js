const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//Main const
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
  }



  module.exports = {
    // BASE config
    externals: {
      paths: PATHS
    },
    entry: {
      app: PATHS.src,
      // module: `${PATHS.src}/your-module.js`,
    },
    output: {
      filename: `${PATHS.assets}js/[name].js`,
      path: PATHS.dist,
      publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }, {
                   loader: 'postcss-loader',
                   options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
               }
             ]
        },{
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
              }, {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          },
    ]
    },
    
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].css`,
        })
      ]
}