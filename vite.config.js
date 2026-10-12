import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  base: '/html-css_132_vanilika-as/',
  plugins: [injectHTML()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
