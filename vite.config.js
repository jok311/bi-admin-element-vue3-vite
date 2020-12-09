'use strict'
const path = require('path')

const svgPlugin = require('vite-plugin-svg');


const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'bi-element-admin-vue3' // page title

const sharedConfig = {
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  }
}

const config = {
  /**
   * github: https://github.com/vitejs/vite
   * Detail: https://github.com/vitejs/vite/blob/master/src/node/build/index.ts
   */
  port: process.env.port || process.env.npm_config_port || 1123, // dev port,
  // root: './',   //default: process.cwd(),
  base: './',
  outDir: 'dist',
  assetsDir: 'static',

  optimizeDeps: {
    include: ["echarts", "vue-draggable-resizable","vue-drag-resize"]
  },
  plugins: [
    svgPlugin(),
  ],  
  // alias: {
  //   '/@/': path.resolve(__dirname, 'src')
  //   // '/@/': path.resolve(__dirname, './src'),
  //   // '/components/': path.resolve(__dirname, './src/components')
  // },

  transforms: [require('vite-transform-globby-import')(sharedConfig)]

  

  // rollupInputOptions: {
  //   external: ['vue']
  // },

  // plugins: [
  //   ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  // ]

}

module.exports = {
  ...sharedConfig,
  ...config
}