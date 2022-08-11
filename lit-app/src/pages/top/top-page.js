import {LitElement, html, css} from 'lit';
export class TopPage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }

      h1 {
        font-size: large;
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
      <h1>This is Top Page</h1>
      <a href="/users">Users</a>
      <a href="/nice">Nice</a>
    `;
  }
}

window.customElements.define('top-page', TopPage);
