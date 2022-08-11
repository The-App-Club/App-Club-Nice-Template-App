import {router} from '../../router/index';
import {LitElement, html, css} from 'lit';
export class ProjectDetailPage extends LitElement {
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
      projectId: {type: String},
      location: {type: Object},
      appContext: {type: Object},
    };
  }

  constructor() {
    super();
    this.location = router.location;
    this.userId = '';
    this.projectId = '';
    this.appContext = window['appContext'];
  }

  render() {
    this.userId = this.location.params.userId;
    this.projectId = this.location.params.projectId;
    this.appContext.setProjectInfo({projectId: this.projectId});
    return html`
      <h1>User Detail Page</h1>
      <p>userId: ${this.userId}</p>
      <p>projectId: ${this.projectId}</p>
      <a href="/nice">Nice</a>
    `;
  }
}

window.customElements.define('project-detail-page', ProjectDetailPage);
