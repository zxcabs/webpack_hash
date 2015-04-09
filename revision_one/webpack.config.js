/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */
module.exports = {
    name: 'app',
    entry: {
        main: __dirname + '/src/main.js'
    },
    output: {
        path: __dirname + '/compile/',
        filename: '[name]_[chunkHash].js',
        pathinfo: true,
        sourceMapFilename: '[name].map'
    },
    resolve: {
        alias: {
            'jquery': __dirname + '/src/vendor/fake.jquery.js'
        }
    },
    devtool: 'source-map'
};
