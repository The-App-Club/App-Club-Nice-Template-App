import {LitElement, html, css} from 'lit';
export class UserListPage extends LitElement {
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
      userInfoList: {type: Array},
      appContext: {type: Object},
    };
  }

  getUserInfoList() {
    return [
      {
        userId: 'kim',
      },
      {
        userId: 'Jane',
      },
      {
        userId: 'Sam',
      },
    ];
  }

  constructor() {
    super();
    this.userInfoList = this.getUserInfoList();
    this.appContext = window['appContext'];
  }

  render() {
    return html`
      ${console.log(process.env)} ${console.log(window['appContext'])}
      <h1>User List Page</h1>
      <p>total count ${this.appContext.counterInfo.count}</p>
      <ul>
        ${this.userInfoList.map(
          (userInfo, index) => html`
            <li>
              <a href="/users/${userInfo.userId}">${userInfo.userId}</a>
            </li>
          `
        )}
      </ul>
    `;
  }
}

window.customElements.define('user-list-page', UserListPage);
