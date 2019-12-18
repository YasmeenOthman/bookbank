import React from 'react';
import NavBar from './NavBar.jsx';
import BigImag from './BigImag';
import UniversitySlide from './UniversitySlide';
import LastBook from './LastBook.jsx';
import Footer from './Footer.jsx';



//--------Main Home page------
export const Home = () => {

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
       {/* Footer Component */}
       <Footer />
    </div>
  );
}

export default Home;