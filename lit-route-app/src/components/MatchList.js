import { html, css, LitElement } from 'lit';
import { until } from 'lit-html/directives/until.js';

import { Loader } from './Loader.js';

import {
  formatDate,
  formatTime,
} from '../plugins/utils.js';

const fixtureDisplay = (match) => html`
  <div class="fixture">
    <p>${match.homeTeam.name}</p>
    <div>${formatTime(match.utcDate)}</div>
    <p>${match.awayTeam.name}</p>
  </div>
`;

const resultDisplay = (match) => html`
  <div class="fixture">
    <p
      class="${match.score.fullTime.homeTeam >
      match.score.fullTime.awayTeam
        ? 'winner'
        : ''}"
    >
      ${match.homeTeam.name}
    </p>
    <div>
      ${match.score.fullTime.homeTeam} -
      ${match.score.fullTime.awayTeam}
    </div>
    <p
      class="${match.score.fullTime.awayTeam >
      match.score.fullTime.homeTeam
        ? 'winner'
        : ''}"
    >
      ${match.awayTeam.name}
    </p>
  </div>
`;

let dateDisplay = (
  thisMatchDate,
  currentMatchDate,
  dateUpdateCallback
) => {
  let date = formatDate(thisMatchDate);
  if (date !== currentMatchDate) {
    dateUpdateCallback(date);
    return html`<h3 class="fixtures-heading">${date}</h3>`;
  } else {
    return null;
  }
};

const returnMatches = (displayType, matches) => {
  let day = '';
  let dateUpdateCallback = (updateDate) =>
    (day = updateDate);
  return matches
    .filter((match) => {
      return displayType === 'matches'
        ? match.status !== 'FINISHED'
        : match.status;
    })
    .sort((a, b) => {
      return displayType === 'matches'
        ? new Date(a.utcDate) - new Date(b.utcDate)
        : new Date(b.utcDate) - new Date(a.utcDate);
    })
    .map((match) => {
      let matchDisplay = () =>
        html`${displayType === 'matches'
          ? fixtureDisplay(match)
          : resultDisplay(match)}`;
      return html`
        ${dateDisplay(
          match.utcDate,
          day,
          dateUpdateCallback
        )}
        ${matchDisplay()}
      `;
    });
};

const MatchList = (displayType) => html`
  ${until(
    // https://www.football-data.org/documentation/quickstart
    fetch(
      `http://api.football-data.org/v2/competitions/BL1/matches`,
      {
        headers: {
          'X-Auth-Token': import.meta.env
            .VITE_FOOTBALL_API_KEY,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((itemInfo) => {
        console.log(itemInfo);
        return returnMatches(displayType, itemInfo.matches);
      }),
    html`<tr class="loader-row">
      <td colspan="10">${Loader()}</td>
    </tr>`
  )}
`;

export { MatchList };
