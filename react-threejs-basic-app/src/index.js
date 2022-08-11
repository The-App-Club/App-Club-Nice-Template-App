import './index.css';
import { Pudding } from './components/Pudding';
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <Pudding></Pudding>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
