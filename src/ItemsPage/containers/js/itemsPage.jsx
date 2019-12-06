
import React, { useState, useEffect } from "react";
import NavBar from '../../../HomePage/NavBar.tsx';
import BookItems from './CardItem';
// import dummy from '../.././API/dummy';
import axios from "axios";
// import { parse } from "@babel/core";

// import 
//--------Main Items page------
export const ItemsPage  = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    var path = window.location.href;
    console.log(path);
    var x = [...path];
    console.log(x)
    var y = x.length-1;
    var myId = x[y];
    // var type = typeof univId;
    console.log(myId);
    // if (univId === "") {
    //   univId = "1";
    // }
    // var id = "1";
    var univId = myId;

    axios
      .get(
        `http://localhost:8000/univBooks/${univId}`
      )
      .then(res => {
        console.log(res);
        setbooks(res.data);
    })
      .catch(err => {
        console.log(err);
      })
    },[]);


    return (
      <div>
     <NavBar />
     <h1>Books</h1>
      <div className='mainContainer'>
        {/* <BookItems /> */}
        {books.map(book =>
            <BookItems book={book}/>
        )}
      </div>
      </div>
    )
}

export default ItemsPage;



  // state = {
  //   books: []
  // }

  // useEffect(
  //   () => {
  //     // Start it off by assuming the component is still mounted
  //     let mounted = true;

  //     const loadData = async () => {
  //       const response = await Axios.get(url);
  //       // We have a response, but let's first check if component is still mounted
  //       if (mounted) {
  //         setData(response.data);
  //       }
  //     };
  //     loadData();

  //     return () => {
  //       // When cleanup is called, toggle the mounted variable to false
  //       mounted = false;
  //     };
  //   },
  //   [url]
  // );

  // componentDidMount(){
  //   dummy.getAll()
  //       .then(data => {
  //         this.setState({
  //           books: data
  //         })
  //         console.log(data)
  //       });
  // }