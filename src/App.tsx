import React from "react";
import ItemsPage from "./ItemsPage/containers/js/itemsPage.jsx";
import Home from "../src/HomePage/Home.jsx";
import Item from "./ItemPage1/item.jsx";
import SignIn from "./loging/signinform.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UniversityItems from "./UniversityItem/universityitems.jsx";



const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={`/university/:id`} component={ItemsPage} />
          <Route exact path={'/university/:univId/book/:bookId'} component={Item} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
