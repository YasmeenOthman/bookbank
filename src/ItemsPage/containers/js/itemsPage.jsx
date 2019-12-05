import React from 'react';
import NavBar from '../../../HomePage/NavBar.tsx';
// import Items from './items';
import BookItems from './items'
// import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import dummy from '../.././API/dummy'
// import Grid from '@material-ui/core/Grid';
// import store from '../../../store/store';

// import 
//--------Main Items page------

class ItemsPage extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    dummy.getAll()
        .then(data => {
          this.setState({
            books: data
          })
          console.log(data)
        });
  }

  render() {
    return (
      <div>
     <NavBar />
      <h1>Al-Azhar University</h1>
      <div className='row'>
        {this.state.books.map(book =>
          <BookItems book={book}/>
        )}
      </div>
      </div>
    )
  }
}

export default ItemsPage;