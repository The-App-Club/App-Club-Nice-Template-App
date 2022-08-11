import { html } from 'lit-html';

const Home = () => html`
  <div class="home-description">
    <h1>lit-PL</h1>
    <h3>Unofficial Premier League Scores &amp; Fixtures</h3>
    <p>
      lit-PL is an example single page application built
      with
      <a href="https://github.com/Polymer/lit-html"
        >lit-html</a
      >
      and
      <a href="https://github.com/jamesddavies/lit-route"
        >lit-route</a
      >, a client-side routing library for building single
      page applications with lit-html.
      <br />
      <br />
      View this app on
      <a href="https://github.com/jamesddavies/lit-pl"
        >Github</a
      >.<br />
      All data in this app is from
      <a href="https://www.football-data.org"
        >football-data.org</a
      >.
    </p>
  </div>
`;

export { Home };
