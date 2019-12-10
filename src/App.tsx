import React from 'react';

// import axios from 'axios';
//import './App.css';
import ItemsPage from './ItemsPage/containers/js/itemsPage.jsx';
import Home from '../src/HomePage/Home';
import Item from './ItemPage1/item.jsx';
import SignIn from './loging/signinform.jsx';
import MediaUploader from './MediaUpload/mediaUpload.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from '../src/HomePage/Home';

// createStore(reducer, allInfo)

const App: React.FC = () => {
	var path = window.location.href;
	var univId = parseInt(path[path.length - 1]);
	return (
		<Router>
			<div className="App">
				{/* <Home /> */}
				{/* <ItemsPage /> */}
				{/* <Item />  */}
				<Switch>
					<Route exact path="/" component={MediaUploader} />
					{/* <Route exact path="/" component={Home} /> */}
					<Route exact path={`/university/:id`} component={ItemsPage} />
					<Route exact path={'/university/:univId/book/:bookId'} component={Item} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
