import {NiceButton} from '../../components/button/index';
import {LitElement, html, css} from 'lit';
export class NicePage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
      appContext: {type: Object},
    };
  }

  constructor() {
    super();
    this.name = 'Nice';
    this.count = 0;
    this.appContext = window['appContext'];
  }

  render() {
    return html`
      ${console.log(this.appContext.userInfo.userId)} ${console.log(this.appContext.projectInfo.projectId)}
      <h1>Hello, ${this.name}!</h1>
      <p>total count ${this.appContext.counterInfo.count}</p>
      <button @click=${this._onClick} part="button">Click Count: ${this.count}</button>
      <nice-button>
        <p>This is child content</p>
      </nice-button>
    `;
  }

  _onClick() {
    this.count++;
    this.appContext.countUp();
  }
}

window.customElements.define('nice-page', NicePage);
