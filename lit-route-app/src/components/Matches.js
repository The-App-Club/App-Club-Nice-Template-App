import { html, render } from 'lit-html';

import { MatchList } from './MatchList.js';

const Matches = () => html`
  <h2 class="page-heading">Matches - Next 2 weeks</h2>
  ${MatchList('matches')}
`;

export { Matches };
