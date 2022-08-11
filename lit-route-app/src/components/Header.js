import { html } from 'lit-html';

// https://vitejs.dev/guide/assets.html
import logoURL from '../../static/svg/logo.svg';

const logo = () => html`
  <a class="lit-route-link" data-to="/">
    <img src="${logoURL}" />
  </a>
`;

const nav = () => html`
  <nav>
    <ul>
      <li>
        <a class="lit-route-link" data-to="/matches">
          Matches
        </a>
      </li>
      <li>
        <a class="lit-route-link" data-to="/results">
          Results
        </a>
      </li>
      <li>
        <a class="lit-route-link" data-to="/table">
          Table
        </a>
      </li>
    </ul>
  </nav>
`;

const Header = () =>
  html` <header>${logo()} ${nav()}</header> `;

export { Header };
