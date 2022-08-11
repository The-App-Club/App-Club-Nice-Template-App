import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GoogleIcons } from './components/GoogleIcons';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  const location = useLocation();

  return (
    <>
      <GoogleIcons></GoogleIcons>
      <Header>CowBoy Bebop</Header>
      <ScrollToTop></ScrollToTop>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
            }}
          />
          <Route
            exact
            path="/contact"
            render={() => {
              return <Contact />;
            }}
          />
        </Switch>
      </AnimatePresence>
      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
