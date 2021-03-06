import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context.js';





ReactDOM.render(
  <RoomProvider>
    <Router>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </RoomProvider>,
  

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
