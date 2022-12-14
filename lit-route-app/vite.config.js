import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  envDir: './env',
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
