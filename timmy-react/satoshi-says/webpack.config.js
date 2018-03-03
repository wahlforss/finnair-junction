const path = require('path');
const Webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test:/\.css$/, use:['style-loader','css-loader']},
            {
           test: /\.(png|jp(e*)g|svg)$/,
           use: [{
               loader: 'url-loader',
               options: {
                   limit: 8000, // Convert images < 8kb to base64 strings
                   name: 'images/[hash]-[name].[ext]'
               }
           }]
         }
        ]
        
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new Webpack.DefinePlugin({
            "process.env": {
            NODE_ENV: JSON.stringify("development")
            } 
        })
    ],
    devServer: {                
        
        inline: true,
        port: 8080,        
        historyApiFallback: true,
    },
}