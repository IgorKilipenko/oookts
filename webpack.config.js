var path = require('path');
var webpack = require('webpack');
//var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
    
    devtool: 'inline-source-map',
    
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
        ],
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    
    //context: path.resolve(__dirname, 'src'),

    devServer: {
        contentBase: __dirname,
        filename: 'index.html',
        hot: true,
        historyApiFallback: true,
        setup(app) {
            app.get('/api', function (req, res) {
                res.send('Hello from A!');
            });
        }
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],

                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'bower_components')
                ],

                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-2']
                }
            },

            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },

            {
                test: /\.jsx?$/,
                enforce: 'pre',
                loader: 'eslint-loader'
            },

            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        //new NpmInstallPlugin()
    ]

};