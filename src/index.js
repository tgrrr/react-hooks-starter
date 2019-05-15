import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Changed to register Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
