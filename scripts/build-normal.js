const webpack = require('webpack')
const webpackMainConfig = require('../webpack.normal.config')

function buildWebPack (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        const message = stats.toString({
          chunks: false,
          colors: true,
        })

        if (stats.hasErrors()) {
          reject(new Error(message))
        } else {
          console.log(`> [SUCCESS] webpack ${config.target}`)
          resolve()
        }
      }
    })
  })
}

buildWebPack(webpackMainConfig)
