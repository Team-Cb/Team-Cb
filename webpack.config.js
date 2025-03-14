const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
            entry: './src/index.tsx',
            output: {
                    path: path.resolve(__dirname, 'dist'),
                    publicPath: '/'
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js"]
            },
            devServer: {
                open: true,
                host: 'localhost',
                historyApiFallback: true,
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'index.html'
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.(tsx|ts)$/,
                        use: 'ts-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(jsx|js)$/,
                        include: path.resolve(__dirname, 'src'),
                        exclude: /node_modules/,
                        use: [{
                          loader: 'babel-loader',
                          options: {
                            presets: [
                              ['@babel/preset-env', {
                                "targets": "defaults" 
                              }],
                              '@babel/preset-react'
                            ]
                          }
                        }]
                    },
                    {
                        test: /\.css$/i,
                        use: [stylesHandler, 'css-loader']
                    },
                    {
                        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                        type: 'asset'
                    }
                ]
            }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
}