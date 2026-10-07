import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    rollupOptions: {
      input: resolve(process.cwd(), 'index.html'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/assets': 'http://localhost:3000',
    },
  },
});
