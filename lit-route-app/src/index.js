import { html, render } from 'lit-html';
import { Router } from 'lit-route'; //Remember to use relative paths when using ES6 modules
// https://vitejs.dev/guide/env-and-mode.html#env-variables

import { App } from './components/App';

console.log(import.meta.env);

const appRoot = document.querySelector('#root');

const router = new Router(
  () => render(App(), appRoot),
  appRoot
);

router.init();
