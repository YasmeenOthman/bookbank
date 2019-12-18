import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../HomePage/NavBar';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { functions } from 'firebase';
import jwt_decode from 'jwt-decode';
import { awaitExpression } from '@babel/types';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '80px'
	},
	root1: {
		margin: theme.spacing(2)
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 1500
	},
	image: {
		width: '80%'
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		height: 450
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));
const theme = createMuiTheme({
	typography: {
		subtitle1: {
			fontSize: 20
		},
		body1: {
			fontSize: 26
		},
		h5: {
			fontSize: 30
		},
		subtitle2: {
			fontSize: 26
		}
	}
});

export default function Item() {
	const classes = useStyles();
	const [owner, setOwner] = React.useState('');
	const [book, setBook] = useState([]);
	const [ownerBook, setOwnerBook] = useState([]);
	const [univName, setUnivName] = React.useState('');
	const [ownerId, setOwnerId] = React.useState('');
	const [donatedBooks, setDonatedBooks] = React.useState('');


	//----------get the token from the local storage-----------
	var token = localStorage.getItem('usertoken');
	// console.log(token);
	// var userIdFromToken = '';
	if (token) {
		const decoded = jwt_decode(token);
		// console.log(decoded);
		var userIdFromToken = decoded.userId;
		console.log(userIdFromToken);
	}

	useEffect(() => {
		var path = window.location.href;
		var myPath = path.split('/');
		var univId = myPath[4];
		var bookId = myPath[6];

		axios
			.get(`http://localhost:8000/university/${univId}/book/${bookId}`)
			.then((res) => {
				// console.log(res.data);
				setBook(res.data.bluePrintBook);
				// console.log(res.data.donatedBooksOwners);
				setUnivName(res.data.universityNameOfBook.universityName);
				setOwnerBook(res.data.donatedBooksOwners);

				setDonatedBooks(res.data.donatedBooks);
				// setOwnerId(res.data.donatedBooksOwners._id);
				console.log("Donateeeed", res.data.donatedBooksOwners);
			})
			.catch((err) => {
				console.log(err);
			});
	}
		, []);

	const handleChange = (event) => {
		setOwnerId(event.target.value);
	};


	const handleRequest = (event) => {
		var path = window.location.href;
		var myPath = path.split('/');
		var univId = myPath[4];
		var bookId = myPath[6];
		event.preventDefault();

		// console.log(ownerId);
		console.log("before and after")
		// setOwnerId("test");
		console.log(ownerId)
		//------The choosen donated book Id--------
		var choosenDonatedBookId = "";
		for (var i = 0; i < donatedBooks.length; i++) {
			if (ownerId === donatedBooks[i].userId) {
				choosenDonatedBookId = donatedBooks[i]._id;
			}
		}
		//--------send requested book info-----------
		axios
			.post(`http://localhost:8000/university/${univId}/book/${bookId}/sendBookRequest`, {
				requesterId: userIdFromToken,
				ownerId: ownerId,
				bookId: bookId,
				donatedBookId: choosenDonatedBookId
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		alert("Your Request is sent Successfully ")

		// console.log('All information of Book from front-end side: ', InfoBook);
	};


	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<NavBar />
				<Paper className={classes.paper}>
					<Grid container spacing={4}>
						<Grid item>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={book.bookCover} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={9}>
								<Grid item xs>
									<Typography gutterBottom variant="h5">
										{book.bookName}
									</Typography>
									<br />
									<br />
									<br />
									<Typography variant="subtitle1">
										<b> University:</b> {univName}
									</Typography>
									<br />
									<Typography variant="subtitle1">
										<b>Description:</b> {book.bookDescription}
									</Typography>
									<br />
									<Typography variant="subtitle1">
										<b>Choose the Owner name you want to borrow the book from:</b>
									</Typography>
									<br />

									<FormControl className={classes.formControl}>
										<InputLabel id="demo-simple-select-label">Owner</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={owner}
											onChange={handleChange}
										>
											{ownerBook.map((owner1, i) => (
												<MenuItem key={i} value={owner1._id} >
													{' '}
													{owner1.userName}
													{console.log("The id of choosen owner in dropDownList", owner1._id)}
												</MenuItem>
											))}

										</Select>
									</FormControl>
								</Grid>
								<Grid item>
									<div>

										<Button variant="contained" onClick={handleRequest}>Send Request For Owner</Button>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</ThemeProvider>
	);
}
