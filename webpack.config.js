var path = require('path');

module.exports = {
    target: 'web',
    entry: './src/js/app.tsx',
    output: {
        filename: './public/js/app.js'
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        ]
    }
};
