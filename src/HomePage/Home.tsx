import React, { useState, useEffect} from 'react';
//import axios from 'axios';
import NavBar from './NavBar';
import BigImag from './BigImag';
import UniversitySlide from './UniversitySlide';
import LastBook from './LastBook';

export interface IAppProps {
  
}
// export interface Books {
//   id: Number,
//   universityName: String,
//   __v: Number,
//   _id: String
// }

//--------Main Home page------
const Home: React.SFC<IAppProps> = (props) => {
//   const [universities, setUniversities] = useState<any>([])
//   const [books, setBooks] = useState<any>([])
//   const allInfo = async () => {
//     axios.get('http://localhost:8000/')
//       .then(({ data }) => {
//         console.log(data)
//         let universities = data.universities;
//         let books = data.recentBooks;
//         setUniversities(universities);
//         setBooks(books);
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   useEffect(() => {
//     allInfo();
//   }, [])

// console.log(universities);
// console.log(books);
  return (
    <div >
      {/* nav bar component */}
      <NavBar />
      {/* main image component */}
      <BigImag />
      {/* Lastest book added component */}
      <LastBook />
      {/* University Component */}
      <UniversitySlide />

    </div>
  );
}

export default Home;