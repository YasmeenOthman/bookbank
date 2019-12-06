import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
// const store = createStore(allReducers, applyMiddleware(thunk));
const store = createStore(allReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>

, document.getElementById('root'));

serviceWorker.unregister();
