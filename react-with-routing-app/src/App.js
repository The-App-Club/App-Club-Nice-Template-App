import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {MyPage} from './pages/mypage/index';
import {Video} from './pages/video/index';
import {Login} from './pages/login/index';
import {Welcome} from './pages/welcome/index';
import {Watch} from './pages/watch/index';

function App() {
  return (
    <Router>
      <div className="article">
        <div className="header">
          <div className="header-title">CowBoy Bebop</div>
        </div>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/watch">
            <Watch />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
        </Switch>

        <div className="cool-navigator">
          <nav>
            <ul>
              <li className="welcome">
                <Link to="/">
                  <span>welcome</span>
                </Link>
              </li>
              <li>
                <Link to="/mypage">
                  <span>mypage</span>
                </Link>
              </li>
              <li className="video">
                <Link to="/video">
                  <span>video</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export {App};
