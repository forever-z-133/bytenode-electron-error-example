const path = require('path')
const fs = require('fs')
const electron = require('electron')

console.log('hello')
console.log(path.resolve(__dirname, '.'))
console.log(fs.existsSync(__dirname))
console.log(electron.version)
