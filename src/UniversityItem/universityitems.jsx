import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import NavBar from '.././HomePage/NavBar';
import axios from 'axios';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			minWidth: 300,
			width: '100%'
		},
		image: {
			position: 'relative',
			height: 200,
			border: '3px solid #77B747',
			[theme.breakpoints.down('xs')]: {
				width: '100% !important', // Overrides inline-style
				height: 100
			},
			'&:hover, &$focusVisible': {
				zIndex: 1,
				'& $imageBackdrop': {
					opacity: 0.15
				},
				'& $imageMarked': {
					opacity: 0
				},
				'& $imageTitle': {
					border: '4px solid currentColor'
				}
			}
		},
		focusVisible: {},
		imageButton: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.palette.common.white
		},
		imageSrc: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundSize: 'cover',
			backgroundPosition: 'center 40%'
		},
		imageBackdrop: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundColor: theme.palette.common.black,
			opacity: 0.4,
			transition: theme.transitions.create('opacity')
		},
		imageTitle: {
			position: 'relative',
			padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
		},
		imageMarked: {
			height: 3,
			width: 18,
			backgroundColor: theme.palette.common.white,
			position: 'absolute',
			bottom: -2,
			left: 'calc(50% - 9px)',
			transition: theme.transitions.create('opacity')
		},
		h2: {
			color: 'gray',
			marginBottom: 20,
			marginTop: 60
		}
	})
);
export const Universityitems = (props) => {
	const [ university, setUniversity ] = useState([]);
	const classes = useStyles();
	useEffect(() => {
		axios
			.get(`http://localhost:8000/university`)
			.then((res) => {
				//console.log(res);
				setUniversity(res.data.universityBooks);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<NavBar />
			<Container style={{ marginBottom: 50 }}>
				<h2 className={classes.h2}>Universities</h2>
				<div className={classes.root}>
					{university.map((university) => (
						<ButtonBase
							focusRipple
							key={university._id}
							className={classes.image}
							focusVisibleClassName={classes.focusVisible}
							style={{
								width: '35%'
							}}
						>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${university.universityImg})`
								}}
							/>
							<Link href={`/university/${university._id}`}>
								<span className={classes.imageBackdrop} />
								<span className={classes.imageButton}>
									<Typography
										component="span"
										variant="subtitle1"
										color="inherit"
										className={classes.imageTitle}
									>
										{university.universityName}
										<span className={classes.imageMarked} />
									</Typography>
								</span>
							</Link>
						</ButtonBase>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Universityitems;
