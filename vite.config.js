import { fileURLToPath, URL } from 'node:url'
import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite'

import vitePluginAutoZip from './vitePlugin/vite-plugin-auto-zip';
import vitePluginVersion from './vitePlugin/vite-plugin-version';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo',
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    }),
    vitePluginAutoZip(),
    vitePluginVersion({ title: '基础模板v1' })
  ],
  server: {
    open: true,
    port: 6060,
    host: '0.0.0.0'
  },
  esbuild: {
    pure: ['console.log']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/css/variables.less')}";`
      }
    }
  }
})
