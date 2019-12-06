import loggedReducer from './isLogged';
import allData from './allData';
//import productsReducer from './itemsContainer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged : loggedReducer,
    allData : allData
});

export default allReducers;