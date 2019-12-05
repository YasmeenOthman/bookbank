import React from 'react';
//import './App.css';
import ItemsPage from './ItemsPage/containers/js/itemsPage.jsx'
// import Home from '../src/HomePage/Home'
// import NavBar from './HomePage/NavBar'
// import Item from './ItemPage/item'
// import Home from '../src/HomePage/Home';

const App: React.FC = () => {
  // const [, setBooks] = useState(initialbooksInfo)
  return (
    <div>
      {/* <NavBar/> */}
      {/* <Home /> */}
       <ItemsPage />
      {/* <Item /> */}
    </div>
  );
}

export default App;
