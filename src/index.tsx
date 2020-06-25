import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const  linvo = document.createElement('linvo-app-client');
document.body.append(linvo);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    linvo
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
