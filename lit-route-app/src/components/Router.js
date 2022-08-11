import { html, render } from 'lit-html';
import { Route, DefaultRoute } from 'lit-route';

import { Home } from './Home.js';
import { Matches } from './Matches.js';
import { Results } from './Results.js';
import { Table } from './Table.js';
import { Team } from './Team.js';

const Butts = () => html` <h1>BUTTS!</h1> `;

const Router = () =>
  html`
    ${new Route(`/`, () => Home(), true).mount()}
    ${new Route(`/matches`, () => Matches()).mount()}
    ${new Route(`/table`, () => Table()).mount()}
    ${new Route(`/results`, () => Results()).mount()}
    ${new Route(`/team/:id`, (match) =>
      Team(match)
    ).mount()}
    ${new DefaultRoute(() => Butts()).mount()}
  `;

export { Router };
