import * as React from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../layouts/Main';
function Contact() {
  return (
    <>
      <Main>
        <h2>Contact</h2>
        <p>That feels like an existential question, don't you think?</p>
        <Link to="/">Home</Link>
      </Main>
    </>
  );
}

export { Contact };
