var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack');

module.exports = {
    entry: [
        "./js/app.js"
    ],
    output: {
        path: __dirname + "/dist/js",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};