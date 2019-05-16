var path = require('path');
var webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      new CopyWebpackPlugin([
        { from: './node_modules/filesafe-js/dist/filesafe-js/EncryptionWorker.js', to: 'filesafe-js/EncryptionWorker.js' },
      ])
    ],
    devtool: 'source-map'
};
