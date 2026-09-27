import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tools: resolve(__dirname, 'tools.html'),
        categories: resolve(__dirname, 'categories.html'),
        about: resolve(__dirname, 'about.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        bmi: resolve(__dirname, 'tools/bmi.html'),
        finance: resolve(__dirname, 'categories/finance.html'),
        health: resolve(__dirname, 'categories/health.html'),
        developer: resolve(__dirname, 'categories/developer.html'),
      },
    },
  },
})
