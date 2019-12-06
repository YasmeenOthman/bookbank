import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Items from './ItemsPage/items'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(allReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // <BrowserRouter>
    <Provider store={store}>
         <App />
    </Provider>
    /* </BrowserRouter> */

, document.getElementById('root'));

serviceWorker.unregister();
