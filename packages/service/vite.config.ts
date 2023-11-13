import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'http://localhost:5001',
  // server: {
  //   port: 5001
  // },
  // yarn berry 사용하는 경우 node module 생성하지 않기 위함
  // cacheDir: './.vite',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    federation({
      name: 'service',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue', 'pinia', 'vue-router'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    // cssCodeSplit: false,
    // rollupOptions: {
    //   output: {
    //     format: 'esm',
    //     entryFileNames: 'assets/[name].js',
    //     minifyInternalExports: false,
    //   },
    // },
  },
})
