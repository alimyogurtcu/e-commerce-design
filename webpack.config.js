const path = require('path');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    module: {
        rules: [{
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png$|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
}