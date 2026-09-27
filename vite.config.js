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
        bmi: resolve(__dirname, 'bmi.html'), // Fixed path (root instead of tools/)
        finance: resolve(__dirname, 'finance.html'), // Adjust if category files are in root
        health: resolve(__dirname, 'health.html'),
        developer: resolve(__dirname, 'developer.html'),
      },
    },
  },
})
