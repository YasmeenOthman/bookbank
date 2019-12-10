import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { Provider } from 'react-redux';

// const store = createStore(allReducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>

, document.getElementById('root'));

serviceWorker.unregister();