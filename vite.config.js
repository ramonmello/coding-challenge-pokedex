import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import Inspect from 'vite-plugin-inspect'
import { visualizer } from 'rollup-plugin-visualizer'

import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    viteReact(),
    tailwindcss({
      content: [
        './src/app/features/**/presentation/**/*.tsx',
        './src/app/shared/components/**/*.tsx'
      ]
    }),
    Inspect(),
    visualizer()
  ],
  build: {
    target: 'es2022'
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'vendor', test: /\/react(?:-dom)?/ },
            { name: 'vaul', test: /\/vaul/ },
            { name: 'sonner', test: /\/sonner/ },
            { name: 'axios', test: /\/axios/ }
          ]
        }
      }
    }
  }
})
