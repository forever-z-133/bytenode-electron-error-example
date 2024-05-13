const { join } = require('path')
const { BytenodeWebpackPlugin } = require('@herberttn/bytenode-webpack-plugin')

const mainConfig = {
  entry: {
    main: join(__dirname, 'src/normal.js'),
  },
  output: {
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  plugins: [
    new BytenodeWebpackPlugin({}),
  ],
  mode: 'production',
  target: 'node18',
}

module.exports = mainConfig
