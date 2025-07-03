import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import Inspect from 'vite-plugin-inspect'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true
    }),
    viteReact(),
    tailwindcss(),
    Inspect()
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
