import {router} from '../../router/index';
import {LitElement, html, css} from 'lit';
export class UserDetailPage extends LitElement {
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
      userId: {type: String},
      location: {type: Object},
      appContext: {type: Object},
    };
  }

  constructor() {
    super();
    this.location = router.location;
    this.userId = '';
    this.appContext = window['appContext'];
  }

  render() {
    this.userId = this.location.params.userId;
    this.appContext.setUserInfo({userId: this.userId});
    return html`
      <h1>User Detail Page</h1>
      <p>total count ${this.appContext.counterInfo.count}</p>
      <p>${this.userId}</p>
      <a href="/users/${this.userId}/projects">projects</a>
    `;
  }
}

window.customElements.define('user-detail-page', UserDetailPage);
