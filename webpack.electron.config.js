const { join } = require('path')
const { BytenodeWebpackPlugin } = require('@herberttn/bytenode-webpack-plugin')

const mainConfig = {
  entry: {
    main: join(__dirname, 'src/main.js'),
  },
  output: {
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    // libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new BytenodeWebpackPlugin({
      compileAsModule: true,
      compileForElectron: true,
    }),
  ],
  mode: 'production',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /native_modules[/\\].+\.node$/,
        use: 'node-loader',
      },
      {
        test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
        parser: { amd: false },
        use: {
          loader: '@vercel/webpack-asset-relocator-loader',
          options: {
            outputAssetBase: 'native_modules',
          },
        },
      },
    ]
  }
}

module.exports = mainConfig
