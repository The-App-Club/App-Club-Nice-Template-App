import { html, css, LitElement } from 'lit';

import { Header } from './Header.js';
import { Footer } from './Footer.js';

export class LayoutPage extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${Header()}
      <div class="page">
        <div class="page-content">
          <slot></slot>
        </div>
      </div>
      ${Footer()}
    `;
  }
}

window.customElements.define('layout-page', LayoutPage);
