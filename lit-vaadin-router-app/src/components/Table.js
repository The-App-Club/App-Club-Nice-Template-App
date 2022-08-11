import { LitElement, html, css } from 'lit';
import { until } from 'lit-html/directives/until';

import { Loader } from './Loader.js';

import './Layout.js';

export class TablePage extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    const tableContents = () => html`
      ${until(
        // https://www.football-data.org/documentation/quickstart
        fetch(
          `http://api.football-data.org/v2/competitions/BL1/standings`,
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
          .then((data) => {
            return data.standings[0].table.map(
              (itemInfo) => {
                return html`
                  <tr>
                    <td>${itemInfo.position}</td>
                    <td class="team">
                      <div class="team-img">
                        <img
                          src="${itemInfo.team.crestUrl}"
                        />
                      </div>
                      <p>
                        <a href="/team/${itemInfo.team.id}">
                          ${itemInfo.team.name}
                        </a>
                      </p>
                    </td>
                    <td>${itemInfo.playedGames}</td>
                    <td>${itemInfo.wins}</td>
                    <td>${itemInfo.draws}</td>
                    <td>${itemInfo.losses}</td>
                    <td>${itemInfo.goals}</td>
                    <td>${itemInfo.goalsAgainst}</td>
                    <td>${itemInfo.goalDifference}</td>
                    <td>${itemInfo.points}</td>
                  </tr>
                `;
              }
            );
          }),
        html`<tr class="loader-row">
          <td colspan="10">${Loader()}</td>
        </tr>`
      )}
    `;

    return html`
      <layout-page>
        <h2 class="page-heading">Bundesliga</h2>
        <table class="league-table">
          <tr>
            <th>Position</th>
            <th class="team">Club</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th title="Goals For">GF</th>
            <th title="Goals Against">GA</th>
            <th title="Goal Difference">GD</th>
            <th>Points</th>
          </tr>
          ${tableContents()}
        </table>
      </layout-page>
    `;
  }
}

window.customElements.define('table-page', TablePage);
