
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
  const [university,setUniversity]=useState([]);

  useEffect(() => {
    var path = window.location.href;
    var x = [...path];
    var y = x.length-1;
    var myId = x[y];
    // var type = typeof univId;
    // if (univId === "") {
    //   univId = "1";
    // }
    // var id = "1";
    var univId = myId;

    axios
      .get(
        `http://localhost:8000/university/${univId}`
      )
      .then(res => {
        //console.log(res);
        setbooks(res.data);
        // setUniversity(res.data);
        console.log(res.data);
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