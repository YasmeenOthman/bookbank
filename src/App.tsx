import React from 'react';
//import './App.css';
import Item from './ItemPage/item'
// import Home from '../src/HomePage/Home'
import Items from './ItemsPage/items'
import NavBar from './HomePage/NavBar'


const book: Array<book> = [
  {bookcover: 'https://www.vasansbookstall.com/wp-content/uploads/2016/07/img722-422x600.jpg',
   bookname: 'THE HISTORY OF ENGLISH LITERATURE' 
},

{bookcover: 'https://kbimages1-a.akamaihd.net/c651a401-d736-4e63-a33d-af4a9587f0b7/353/569/90/False/learning-redux.jpg',
bookname: 'LEARNING F*** REDUX' 
}
] 

const App: React.FC = () => {
  // const [, setBooks] = useState(initialbooksInfo)
  return (
    <div>
      {/* <NavBar/> */}
      {/* <Home /> */}
        <Items book={book[0]}/>
    </div>
  );
}

export default App;
