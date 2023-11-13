import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command }) => {
  // 조건부 설정
  // https://ko.vitejs.dev/config/#conditional-config
  const federation_service = command === 'serve' ? 'http://localhost:5001/dist/assets/remoteEntry.js' : 'http://localhost:5001/assets/remoteEntry.js';
  return {
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
          service: federation_service
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
  }
})
