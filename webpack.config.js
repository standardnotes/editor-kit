var path = require('path');
var webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
      "editor-kit.js": "./src/EditorKit.js",
      "editor-kit.min.js": "./src/EditorKit.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]',
        library: 'EditorKit',
        libraryTarget: 'commonjs2'
    },
    externals: {
      'filesafe-js': 'filesafe-js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
      ]
    },
    stats: {
        colors: true
    },
    plugins: [
      new uglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      }),
    ],
    devtool: 'source-map'
};
