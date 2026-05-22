import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes the built site work on GitHub Pages regardless of repo path
// (project pages serve from /<repo>/, user/org pages from /), and also on S3 previews.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
