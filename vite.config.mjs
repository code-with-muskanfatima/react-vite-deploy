import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Build optimization settings
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other vendor chunks as needed
        }
      }
    }
  },

  // Development server settings
  server: {
    port: 3000,
    open: true,
    host: true
  },

  // Resolve settings
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  // CSS settings
  css: {
    devSourcemap: true
  }
});
