import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Items from './ItemsPage/items'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Items />, document.getElementById('root'));

serviceWorker.unregister();
