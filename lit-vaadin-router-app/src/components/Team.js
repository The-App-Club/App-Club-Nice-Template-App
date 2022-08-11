import { until } from 'lit-html/directives/until';
import {
  formatDate,
  formatTime,
} from '../plugins/utils.js';
import { Loader } from './Loader.js';
import { LitElement, html, css } from 'lit';

import './Layout.js';

export class TeamPage extends LitElement {
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
    const teamHeader = (id) => html`
      ${until(
        // https://www.football-data.org/documentation/quickstart
        fetch(
          `http://api.football-data.org/v2/teams/${id}`,
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
            // console.log(itemInfo);
            return html`
              <div class="team-header">
                <img src="${itemInfo.crestUrl}" />
                <h1>${itemInfo.name}</h1>
              </div>
            `;
          }),
        html`${Loader()}`
      )}
    `;

    const teamSquad = (id) => html`
      ${until(
        // https://www.football-data.org/documentation/quickstart
        fetch(
          `http://api.football-data.org/v2/teams/${id}`,
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
            // console.log(itemInfo);
            return html`
              <div>
                <h3>Squad</h3>
                <table class="team-table">
                  ${itemInfo.squad
                    .sort(
                      (a, b) =>
                        a.shirtNumber - b.shirtNumber
                    )
                    .map((player) => {
                      return html`
                        <tr>
                          <td class="player-name">
                            ${player.name}
                          </td>
                          <td class="player-number">
                            #${player.shirtNumber}
                          </td>
                          <td class="player-position">
                            ${player.position}
                          </td>
                        </tr>
                      `;
                    })}
                </table>
              </div>
            `;
          }),
        html`${Loader()}`
      )}
    `;

    const teamMatches = (id) => html`
      ${until(
        // https://www.football-data.org/documentation/quickstart
        fetch(
          `http://api.football-data.org/v2/teams/${id}/matches`,
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
            // console.log(itemInfo);
            return html`
              <div>
                <h3>Upcoming Matches</h3>
                <table class="team-table">
                  ${itemInfo.matches
                    .sort(
                      (a, b) =>
                        new Date(a.lastUpdated) -
                        new Date(b.lastUpdated)
                    )
                    .map((match) => {
                      return html`
                        <tr>
                          <td class="home-team">
                            ${match.homeTeam.name}
                          </td>
                          <td class="match-time-date">
                            ${formatTime(
                              match.lastUpdated
                            )}<br />${formatDate(
                              match.lastUpdated
                            )}
                          </td>
                          <td class="away-team">
                            ${match.awayTeam.name}
                          </td>
                        </tr>
                      `;
                    })}
                </table>
              </div>
            `;
          })
      )}
    `;

    window.scroll(0, 0);

    const teamId =
      window['routerContext'].location.params.teamId;

    return html`
      <layout-page>
        <div class="team-page-description">
          ${teamId} ${teamHeader(teamId)}
          <div class="team-content">
            ${teamSquad(teamId)} ${teamMatches(teamId)}
          </div>
        </div>
      </layout-page>
    `;
  }
}

window.customElements.define('team-page', TeamPage);
