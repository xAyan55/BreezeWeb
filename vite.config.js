import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  server: {
    host: true,
    allowedHosts: true,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: false
  }
});
