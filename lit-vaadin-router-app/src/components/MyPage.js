import { LitElement, html, css } from 'lit';

import './Layout.js';

export class MyPage extends LitElement {
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
      .my-page-description {
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
        <div class="my-page-description">
          <h1>This Is My Page</h1>
        </div>
      </layout-page>
    `;
  }
}

window.customElements.define('my-page', MyPage);
