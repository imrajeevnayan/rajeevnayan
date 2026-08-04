import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-scroll', 'framer-motion'],
  },
  server: {
    port: 5173,
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: true,
  },
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 800,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  cacheDir: 'node_modules/.vite',
});
