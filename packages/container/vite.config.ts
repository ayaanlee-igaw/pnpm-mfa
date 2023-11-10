import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000
  },
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
      name: 'container',
      remotes: {
        service: 'http://localhost:5001/assets/remoteEntry.js'
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
