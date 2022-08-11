// vite.config.js
import {defineConfig} from 'vite';

module.exports = defineConfig({
  base: './',
  root: 'src',
  build: {
    outDir: `${__dirname}/dist`,
  },
});
