import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NavBar from '../../../HomePage/NavBar';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		// background: 'rgb(0, 179, 0)',
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	imgBook: {
		height: 250,
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

export const ItemsPage = () => {
	const [ books, setbooks ] = useState([]);
	const [ university, setUniversity ] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		var path = window.location.href;
		console.log(path)
		var myPath = path.split('/');
		var univId = myPath[4];

		axios
			.get(`http://localhost:8000/university/${univId}`)
			.then((res) => {
				//console.log(res);
				let universities = res.data.universities;
				setbooks(res.data);
				setUniversity(universities);
				setUniversity(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<NavBar />
			<Container>
				<h2 className={classes.root1}>University</h2>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{books.map((book) => (
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
									<Button style={{ color: 'Black', border: '1px solid white' }} variant="outlined">
										View More
									</Button>
								</Link>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default ItemsPage;
