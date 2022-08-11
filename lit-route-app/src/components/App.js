import { html, css, LitElement } from 'lit';

import { Header } from './Header.js';
import { Router } from './Router.js';
import { Footer } from './Footer.js';

const App = () => html`
  ${Header()}
  <div class="page">
    <div class="page-content">${Router()}</div>
  </div>
  ${Footer()}
`;

export { App };
