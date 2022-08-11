import { html } from 'lit-html';

// https://vitejs.dev/guide/assets.html
import logoURL from '../../static/svg/logo.svg';

const logo = () => html`
  <a href="/">
    <img src="${logoURL}" />
  </a>
`;

const nav = () => html`
  <nav>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/my-page">MyPage</a>
      </li>
      <li>
        <a href="/table">Table</a>
      </li>
    </ul>
  </nav>
`;

const Header = () =>
  html` <header>${logo()} ${nav()}</header> `;

export { Header };
