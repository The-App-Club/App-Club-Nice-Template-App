// vite.config.js
import {defineConfig} from 'vite';

module.exports = defineConfig({
  base: './',
  root: 'src/demo3',
  build: {
    outDir: `${__dirname}/dist/demo3`,
  },
});
