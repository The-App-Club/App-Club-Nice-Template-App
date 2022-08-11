import { html, css, LitElement } from 'lit';

export class NiceSample extends LitElement {
  static styles = css`
    :host {
      --indent: 10px;
    }
    h2 {
      padding-left: var(--indent);
    }
  `;

  render() {
    return html`
      <main>
        <h2>Cool</h2>
      </main>
    `;
  }
}

window.customElements.define('nice-sample', NiceSample);
