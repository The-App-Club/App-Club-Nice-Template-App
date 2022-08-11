import {LitElement, html, css} from 'lit';
export class NiceButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 4px #c3dbf3;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'Nice';
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button
        @click=${(event) => {
          this.increment(event);
        }}
        part="button"
      >
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  increment(event) {
    console.log('increment', event);
    this.count++;
  }
}

window.customElements.define('nice-button', NiceButton);
