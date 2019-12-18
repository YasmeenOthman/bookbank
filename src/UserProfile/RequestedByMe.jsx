import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import jwt_decode from 'jwt-decode';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		// background: 'rgb(0, 179, 0)',
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		width: 250,
		margin: 'auto'
	},
	imgBook: {
		height: 55,
		marginBottom: 10,
		maxWidth: '100%'
	},
	h2: {
		color: 'gray',
		marginBottom: 20
	},
	root1: {
		marginTop: 50,
		textAlign: 'center',
		marginBottom: 100,
		fontSize: 30
	}
}));

export default function RequestedByMe() {
	const [ books, setbooks ] = useState([]);
	const [ data, setData ] = useState([]);
	const [ owner, setOwners ] = useState([]);
	const [ blueprint, setblueprints ] = useState([]);
	const [ requestedBooks, setRequestedBooks ] = useState([]);

	const classes = useStyles();
	var token = localStorage.getItem('usertoken');
	const decoded = jwt_decode(token);
	var email = decoded.email;
	var username = decoded.userName;
	var id = decoded.userId;

	// var request = function () {
	//   if (books.isAccepted === true) {
	//     return "Accepted"
	//   } else if (books.isAccepted === false && books.isIgnored === false) {
	//     return "Ignored"
	//   } else {
	//     return "pending"
	//   }
	// }

	var prepareData = function(requestedBooks, namesOfOwners, bluePrintBooks) {
		var requestedBooksData = [];
		for (var i = 0; i < requestedBooks.length; i++) {
			requestedBooks[i]['ownerName'] = namesOfOwners[i]['userName'];
			requestedBooks[i]['ownerId'] = namesOfOwners[i]['_id'];
			requestedBooks[i]['BookId'] = bluePrintBooks[i]['_id'];
			requestedBooks[i]['bookName'] = bluePrintBooks[i]['bookName'];
			requestedBooks[i]['bookCover'] = bluePrintBooks[i]['bookCover'];
			requestedBooks[i]['universityId'] = bluePrintBooks[i]['universityId'];
			requestedBooks[i]['bookDescription'] = bluePrintBooks[i]['bookDescription'];
			//----push the obj to the array--------
			requestedBooksData.push(requestedBooks[i]);
		}
		return requestedBooksData;
	};

	useEffect(() => {
		var path = window.location.href;
		console.log(path);
		var myPath = path.split('/');
		var univId = myPath[4];

		axios
			.get(`http://localhost:8000/profile/${id}/booksRequestedByTheUser`)
			.then((res) => {
				setOwners(res.data.namesOfOwners);
				setbooks(res.data.requestedBooks);
				setblueprints(res.data.bluePrintBooks);
				setData(res.data);

				// setbooks(res.data)
				var allData = prepareData(books, owner, blueprint);
				setRequestedBooks(allData);
				setRequestedBooks([ 1, 2, 3 ]);

				console.log(requestedBooks);
				console.log('nouuuur', res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// var bookname = blueprint.bookName;
	return (
		<div>
			{books.isAccepted ? (
				requestedBooks.map((book1) => (
					<Container>
						<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
							<Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={books._id}>
								<Paper className={classes.paper}>
									<img alt="img" src={book1.bookCover} className={classes.imgBook} />

									<h3 style={{ marginBottom: 5 }}>{book1.bookName}</h3>
									<h3 style={{ marginBottom: 5 }}>{book1.ownerName}</h3>

									<Button style={{ color: 'Black', border: '1px solid white' }} variant="outlined">
										Status: Accepted
									</Button>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				))
			) : (
				requestedBooks.map((book1) => (
					<Container>
						<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
							<Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={books._id}>
								<Paper className={classes.paper}>
									<img alt="img" src={book1.bookCover} className={classes.imgBook} />

									<h3 style={{ marginBottom: 5 }}>{book1.bookName}</h3>

									<Button style={{ color: 'Black', border: '1px solid white' }} variant="outlined">
										Status: Ignored
									</Button>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				))
			)}
		</div>
	);
}
