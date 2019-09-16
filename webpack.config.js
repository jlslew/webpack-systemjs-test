module.exports = [{
    entry: {
        main: [
            './main.js'
        ]
    },
    output: {
        filename: '[name].min.js',
        libraryTarget: 'system',
        path: __dirname
    },
    optimization: {
        minimizer: [
            new (require('terser-webpack-plugin'))()
        ]
    }
}, {
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].min.js',
        path: __dirname
    },
    module: {
        rules: [{
            test: /systemjs/,
            use: [{
                loader: 'exports-loader',
                options: {
                    'self.System': true
                }
            }]
        }]
    },
    optimization: {
        minimizer: [
            new (require('terser-webpack-plugin'))()
        ]
    },
    plugins: [
        new (require('webpack')).ProvidePlugin({
            SystemJS: 'systemjs/dist/system.js'
        })
    ]
}];