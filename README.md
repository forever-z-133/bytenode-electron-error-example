# test-bytenode

my project is base on `webpack@5.52.0`.

```
npm i -D bytenode @herberttn/bytenode-webpack-plugin
```

### when no electron code is ok

```shell
npm run build:normal
npm run preview:normal
```

### with electron throw error

but, in electron command(not use `electron-forge`, want use `electron` directly), is not ok. 

```shell
npm run build:electron # Error: Cannot find module 'node:assert/strict'
```

## use bytenode directly also throw error

in `./scripts/build-main.js`, there are two functions.  
first use `compileFile` api, second use `compileElectronCode`,  
but also throw different error.

```shell
npm run build:main
npm run preview:main # Error: Cannot find module 'node:assert/strict'
```
