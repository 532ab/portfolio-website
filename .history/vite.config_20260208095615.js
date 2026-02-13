import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
          'framer-motion': ['framer-motion'],
          spline: ['@splinetool/react-spline'],
        },
      },
    },
    minify: 'terser',
    cssCodeSplit: true,
  },
  server: {
    compress: true,
  },
})
