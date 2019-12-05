import React from 'react';
import NavBar from './NavBar';
import BigImag from './BigImag';
import UniversitySlide from './UniversitySlide';
import LastBook from './LastBook';

//--------Main Home page------
const Home: React.FC = () => {
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