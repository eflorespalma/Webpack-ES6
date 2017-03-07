module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extension: ['', '.js']
    },
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}