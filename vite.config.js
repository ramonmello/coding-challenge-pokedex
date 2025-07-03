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
    sourcemap: true,
    gzip: true,
    brotli: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'react-router': ['@tanstack/react-router'],
          'react-query': ['@tanstack/react-query'],
          'react-i18next': ['react-i18next'],
          axios: ['axios'],
          'react-dialog': ['@radix-ui/react-dialog'],
          'react-collapsible': ['@radix-ui/react-collapsible'],
          'react-slot': ['@radix-ui/react-slot'],
          vaul: ['vaul']
        }
      }
    }
  }
})
