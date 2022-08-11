import { html } from 'lit-html';

import { MatchList } from './MatchList.js';

const Results = () => html`
  <h2 class="page-heading">Results - Last 2 weeks</h2>
  ${MatchList('results')}
`;

export { Results };
