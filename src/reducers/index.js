import loggedReducer from './isLogged';
import postReducer from './postReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    isLogged : loggedReducer,
    posts: postReducer
});

export default rootReducers;