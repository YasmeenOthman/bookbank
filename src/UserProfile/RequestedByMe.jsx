import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import jwt_decode from 'jwt-decode';
import Link from '@material-ui/core/Link';
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
	const [ data, setData ] = useState([]);
	const [ status, setStatus ] = useState('');


	const classes = useStyles();
	var token = localStorage.getItem('usertoken');
	const decoded = jwt_decode(token);
	var email = decoded.email;
	var username = decoded.userName;
	var id = decoded.userId;

	useEffect(() => {
		var path = window.location.href;
		console.log(path);
		var myPath = path.split('/');
		var univId = myPath[4];

		axios
			.get(`https://blooming-refuge-64917.herokuapp.com/profile/${id}/booksRequestedByTheUser`)
			.then((res) => {
				setData(res.data);
				console.log(res.data);
				findStatus(res.data.isAccepted, res.data.isIgnored);

			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	var findStatus = function(accepted, ignored) {
		if(accepted){
			setStatus('Accepted');
		}else if(ignored){
			setStatus('Ignored');
		}else if(!accepted && !ignored){
			setStatus('Pending');
		}
	}

	// var status = function ()
	return (
		<div>
			
				<Container>
					<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
						{data.map((book) => (
							<Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={book._id}>
								<Paper className={classes.paper}>
									<img alt="img" src={book.bookCover} className={classes.imgBook} />
									<Link
										href={`/university/${book.universityId}/book/${book._id}`}
										style={{ color: 'black' }}
									>
										<h3 style={{ marginBottom: 5 }}>{book.bookName}</h3>
									</Link>
									<Link
										href={`/university/${book.universityId}/book/${book._id}`}
										style={{ color: 'white' }}
									>
										<Button
											style={{ color: 'Black', border: '1px solid white' }}
											variant="outlined"
										>
											Status: {status};
										</Button>
										<Button
											style={{ color: 'Black', border: '1px solid white' }}
											variant="outlined"
										>
											Owner: {book.ownerName}
										</Button>
									</Link>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			
				
		</div>
	);
}
