import glsl from 'vite-plugin-glsl';
import {defineConfig} from 'vite';

// https://www.npmjs.com/package/vite-plugin-glsl
export default defineConfig({
  plugins: [glsl()],
});
