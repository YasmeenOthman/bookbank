import React from "react";
import ItemsPage from "./ItemsPage/containers/js/itemsPage.jsx";
import Home from "../src/HomePage/Home.jsx";
import Item from "./ItemPage1/item.jsx";
import SignIn from "./loging/signinform.jsx";
import universityitems from "./UniversityItem/universityitems";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from './UserProfile/user' 
// import UniversityItems from "./UniversityItem/universityitems.jsx";



export const App = () => {
  return (
    <Router>
      {/* <UserProfile /> */}
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={`/university/:id`} component={ItemsPage} />
          <Route exact path={'/university/:univId/book/:bookId'} component={Item} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/university" component={universityitems} />
          <Route exact path="/university/:id" component={UserProfile} />
        </Switch> 
      </div>
    </Router>
  );
};

export default App;
