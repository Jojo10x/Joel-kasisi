import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression()
  ],
  build: {
    assetsInlineLimit: 0, 
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash].[ext]', 
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'] 
        }
      }
    },
    cssCodeSplit: true, 
    reportCompressedSize: false 
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})