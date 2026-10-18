import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: { entry: 'src/stories/index.ts', formats: ['es'], fileName: () => 'index.js' },
    outDir: 'dist-lib',
    emptyOutDir: false, // tsc writes the .d.ts tree here first
    sourcemap: false,
    minify: false,
    assetsInlineLimit: 100 * 1024 * 1024,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom/client'],
      output: { exports: 'named' },
    },
  },
});
