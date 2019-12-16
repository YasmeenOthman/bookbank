import loggedReducer from './isLogged';
import postReducer from './postReducer'
import bookReducer from './bookReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    isLogged : loggedReducer,
    posts: postReducer,
    books: bookReducer
});

export default rootReducers;