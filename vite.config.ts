import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgLoader from 'vite-svg-loader'
const reactSvgPlugin = require('vite-plugin-react-svg')
const SERVER = 'http://localhost:8080'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// import Buffer from 'buffer'
export default defineConfig({
  plugins: [react(), reactSvgPlugin()],
  define: {
    __TEST__: JSON.stringify(false),
    __DEV__: JSON.stringify(false),
    'process.env': {},
    sql: {},
    // global: 'globalThis',
    // Buffer: Buffer,
  },
  server: {
    proxy: {
      '/api': `http://${SERVER}`,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
      process: 'process/browser',
      path: 'path-browserify',
      timers: 'timers-browserify',
      fs: 'browserify-fs',
      https: 'https-browserify',
      stream: 'stream-browserify',
      http: 'stream-http',
      buffer: 'buffer/',
    },
  },
})
