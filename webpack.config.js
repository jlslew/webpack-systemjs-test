module.exports = [{
    mode: 'development',
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
    module: {
        rules: [
            {parser: {system: false}}
        ]
    }
}, {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        filename: '[name].min.js',
        path: __dirname
    },
    module: {
        rules: [
            {parser: {system: false}}
        ]
    }
}];