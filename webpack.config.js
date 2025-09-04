const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192,
                    },
                },
                ],
            },
        ],
    },
};