import * as React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../layouts/Main';
function About() {
  return (
    <>
      <Main>
        <h2>About</h2>
        <p>That feels like an existential question, don't you think?</p>
        <Link to="/contact">Contact</Link>
      </Main>
    </>
  );
}

export { About };
