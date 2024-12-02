import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {
      css: {
        extract: true, // This extracts CSS into separate files
      },
    },
  },
  assetsInclude: ['**/*.docx'], // Add this line to include .docx files as assets
});