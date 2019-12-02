import React from 'react';
//import './App.css';
import Item from './ItemPage/item'
// import Home from '../src/HomePage/Home'
import Items from './ItemsPage/items'
import NavBar from './HomePage/NavBar'
const App: React.FC = () => {
  return (
    <div>
      <NavBar/>
      {/* <Home /> */}
      <Items />
    </div>
  );
}

export default App;
