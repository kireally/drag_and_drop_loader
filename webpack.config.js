const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',

    entry: ('./src/js/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
      extensions: ['.js', '.png', 'jpg', '.css']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ''
                    }
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass')
                    }
                  }
                ]
            },
            {
              test: /\.(png|jpe?g|svg)$/,
              use: [
                      {
                        loader: 'file-loader',
                        options: {
                          outputPath: 'images'
                        }
                      },
                      {
                        loader: 'image-webpack-loader'
                      }
              ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]














}
