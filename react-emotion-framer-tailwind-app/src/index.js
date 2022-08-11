import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Sandbox } from './components/Sandbox';

function App() {
  return <Sandbox></Sandbox>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
