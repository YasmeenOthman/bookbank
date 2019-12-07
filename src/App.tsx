import React from "react";
//import './App.css';
// import Home from "../src/HomePage/Home";
// import Item from "./ItemPage/item";
import Login from "../src/loging/login";
//import NavBar from './HomePage/NavBar'
import Home from "../src/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      {/* <Login /> */}

      {/* <Item /> */}
      {/* <NavBar/> */}
    </div>
  );
};

export default App;
