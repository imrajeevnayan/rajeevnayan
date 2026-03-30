import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', '@react-three/fiber', '@react-three/drei', 'three', 'react-scroll', 'framer-motion'],
  },
  server: {
    port: 5173,
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        // Remove manualChunks to let Vite handle it automatically
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
  },
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  cacheDir: 'node_modules/.vite',
});
