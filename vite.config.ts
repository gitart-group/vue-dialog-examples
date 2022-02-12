import path from 'path'
import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

const resolve = (str: string) => path.resolve(__dirname, str)

export default (): UserConfigExport => defineConfig({
  plugins: [
    Vue(),
    WindiCSS(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        'vue',
      ],
    }),
  ],

  server: {
    fs: {
      strict: false,
      allow: [resolve('../')],
    },
  },

  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },

  build: {
    sourcemap: true,
  },
})
