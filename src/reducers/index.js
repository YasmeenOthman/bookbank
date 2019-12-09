import loggedReducer from './isLogged';
import allData from './allData';
import postReducer from './postReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    isLogged : loggedReducer,
    allData : allData,
    posts: postReducer
});

export default rootReducers;