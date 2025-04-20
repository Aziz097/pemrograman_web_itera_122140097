import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,            // aktifkan global API (test, expect, describe)
    environment: 'jsdom',     // buat DOM virtual agar RTL bisa render komponen
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.test.{js,jsx}']
  }
})
