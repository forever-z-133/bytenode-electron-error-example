const bytenode = require('bytenode')
const path = require('path')
const v8 = require('v8')
const fs = require('fs-extra')

const rootDir = path.resolve(__dirname, '..')
const input = path.resolve(rootDir, 'src/main.js')
const temp = path.resolve(rootDir, 'dist/main.compiled.jsc')
const output = path.resolve(rootDir, 'dist/main.js')

v8.setFlagsFromString('--no-lazy')

const electronPath = path.resolve(rootDir, './node_modules/.bin/electron')
const res = require('child_process').spawnSync(electronPath, ['-v'])
console.log('electron version:', res.stdout.toString('utf8'))

first()
// second()

/**
 * first. use compileFile
 * `npm run build:main` is ok
 * `npm run preview:main` throw error: Cannot find module 'node:assert/strict'
 **/
function first() {
  bytenode.compileFile(input, temp, {
    electron: true,
    electronPath,
  })
  bytenode.addLoaderFile(temp, path.basename(output))
}

/**
 * second. use compileElectronCode
 * `npm run build:main` throw error: No such file or directory
 **/
function second() {
  fs.ensureFileSync(temp)
  fs.ensureFileSync(output)
  const inputTxt = fs.readFileSync(input, 'utf8')
  bytenode.compileElectronCode(inputTxt, {
    electronPath,
  })
}

