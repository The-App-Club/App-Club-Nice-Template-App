import {router} from '../../router/index';
import {LitElement, html, css} from 'lit';
export class ProjectListPage extends LitElement {
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
      projectInfoList: {type: Array},
      appContext: {type: Object},
    };
  }

  constructor() {
    super();
    this.location = router.location;
    this.userId = '';
    this.projectInfoList = [];
    this.appContext = window['appContext'];
  }

  getProjectInfoList(targetUserName) {
    const targetProjectInfoList = [
      {
        userId: 'kim',
        projectInfoList: [
          {
            projectId: 'hoge',
          },
          {
            projectId: 'toge',
          },
        ],
      },
      {
        userId: 'Jane',
        projectInfoList: [
          {
            projectId: 'qqqq',
          },
          {
            projectId: 'pppp',
          },
        ],
      },
      {
        userId: 'Sam',
        projectInfoList: [
          {
            projectId: 'ssss',
          },
          {
            projectId: 'kkkk',
          },
        ],
      },
    ];
    return targetProjectInfoList.filter((targetProjectInfo) => {
      return targetProjectInfo.userId === targetUserName;
    })[0].projectInfoList;
  }

  render() {
    this.userId = this.location.params.userId;
    this.projectInfoList = this.getProjectInfoList(this.userId);
    return html`
      <h1>Project List Page</h1>
      <p>total count ${this.appContext.counterInfo.count}</p>
      <p>${this.userId}</p>
      <ul>
        ${this.projectInfoList.map(
          (projectInfo, index) => html`
            <li>
              <a href="/users/${this.userId}/projects/${projectInfo.projectId}">${projectInfo.projectId}</a>
            </li>
          `
        )}
      </ul>
    `;
  }
}

window.customElements.define('project-list-page', ProjectListPage);
