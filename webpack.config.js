const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', 
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer:{
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /mode_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /mode_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            
        ],
    },
    devServer: {
        historyApiFallback: true,
      },
};