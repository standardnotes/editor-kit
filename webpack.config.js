const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
      "editor-kit": "./src/index.js",
      "editor-kit.min": "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].js',
        sourceMapFilename: '[name].js.map',
        library: 'EditorKit',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
      'filesafe-js': 'filesafe-js'
    },
    module: {
      rules: [
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
      new CopyWebpackPlugin([
        {
          from: './node_modules/filesafe-js/dist/filesafe-js/EncryptionWorker.js',
          to: 'filesafe-js/EncryptionWorker.js'
        },
      ]),
    ],
    devtool: 'source-map'
};
