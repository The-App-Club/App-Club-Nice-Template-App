import { LitElement, html, css } from 'lit';

import './Layout.js';

export class ContactPage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      h1 {
        font-size: 30px;
      }
      .contact-description {
        padding: 30px;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <layout-page>
        <div class="contact-description">
          <h1>This Is Contact Page</h1>
        </div>
      </layout-page>
    `;
  }
}

window.customElements.define('contact-page', ContactPage);
