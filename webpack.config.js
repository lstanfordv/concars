const path = require('path');

module.exports = {
    context: __dirname + "/app",

    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './app'),
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"],
        }, {
            test: /\.css$/,
            loader: 'style!css!'
        }, {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        }, ],
    },
}
