import { LitElement, html, css } from 'lit';

import './Layout.js';

export class HomePage extends LitElement {
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
      .home-description {
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
        <div class="home-description">
          <h1>Welcome Banana Fish</h1>
          <p>Have Fun</p>
        </div>
      </layout-page>
    `;
  }
}

window.customElements.define('home-page', HomePage);
