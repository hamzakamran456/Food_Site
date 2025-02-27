import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensure assets load correctly on Vercel
  build: {
    outDir: 'dist',  // Ensure output folder is correct
  },
  server: {
    port: 5173,
  }
})
