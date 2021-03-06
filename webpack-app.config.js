const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: './client/containers/App.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client')
  }
};