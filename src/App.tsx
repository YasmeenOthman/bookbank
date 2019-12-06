import React from 'react';
//import './App.css';
import ItemsPage from './ItemsPage/containers/js/itemsPage.jsx';
import Home from '../src/HomePage/Home';
import Item from './ItemPage/item';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Home from '../src/HomePage/Home';

const App: React.FC = () => {
  // const [, setBooks] = useState(initialbooksInfo)
  return (
    <Router>
    <div className= "App">
      <Home />
      <ItemsPage /> 
      <Item /> 
    </div>
    </Router>
  );
}

export default App;
