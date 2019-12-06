import React from 'react';
// import axios from 'axios';
//import './App.css';
// import Item from './ItemPage/item'
import Home from '../src/HomePage/Home';
// import { createStore } from 'redux';
// function reducer(state:any, action:any){
//   return state
// }

// createStore(reducer, allInfo)
const App: React.FC = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Home />
      {/* <Item /> */}
    </div>
  );
}

export default App;
