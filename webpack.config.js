const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    'editorkit': './src/index.ts',
    'editorkit.min': './src/index.ts',
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    library: 'EditorKit',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  externals: {
    'filesafe-js': 'filesafe-js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-typescript"]
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './node_modules/filesafe-js/dist/filesafe-js/EncryptionWorker.js',
          to: 'filesafe-js/EncryptionWorker.js'
        },
      ]
    }),
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      include: /\.min\.js$/
    })]
  }
};
