import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/cowboy-bebop/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
