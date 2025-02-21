import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {
      css: {
        extract: true, // This extracts CSS into separate files
      },
    },
  },
  assetsInclude: ['**/*.docx'], // Add this line to include .docx files as assets
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});