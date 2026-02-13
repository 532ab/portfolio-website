import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotli' }),
    imagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.6, 0.8], speed: 4 },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
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
