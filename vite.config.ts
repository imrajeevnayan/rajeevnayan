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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          icons: ['lucide-react']
        }
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  cacheDir: 'node_modules/.vite',
});
