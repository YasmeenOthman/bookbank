import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NavBar from '../HomePage/NavBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { storage } from '../firebase/firebase';
import jwt_decode from 'jwt-decode';

//=================================================================
//-----------This component needs the user token-------------------
//=================================================================

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	formControl: {
		minWidth: 350
	},
	textfield: {
		minWidth: 350
	}
}));

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

export default function AddBook() {
	const classes = useStyles();
	const [ university, setUni ] = React.useState('');
	const [ name, setName ] = React.useState('');
	const [ description, setDesc ] = React.useState('');
	// const [ imgUrl, setimgUrl ] = React.useState('');
	const [ univs, setUnivs ] = React.useState([]);
	const inputLabel = React.useRef(null);
	const [ labelWidth, setLabelWidth ] = React.useState(0);

	//------------------variables for handle media-------------------
	const [ imageAsFile, setImageAsFile ] = React.useState('');
	const [ imageAsUrl, setImageAsUrl ] = React.useState('');

	//---------------------handle media file-------------------------
	// console.log(imageAsFile);
	const handleImageAsFile = (e) => {
		e.preventDefault();
		const image = e.target.files[0];
		setImageAsFile((imageFile) => image);
	};

	//-----------------Get url from Firebase-------------------------
	const handleFireBaseUpload = (e) => {
		e.preventDefault();
		console.log('start of upload');

		//---------error handling------
		if (imageAsFile === '') {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}

		//------uploadTask variable-----
		const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

		//----grab the image from firebase as an imageUrl---
		uploadTask.on(
			'state_changed',
			(snapShot) => {
				//takes a snap shot of the process as it is happening
				console.log('snapshot in the next line !');
				console.log(snapShot);
			},
			(err) => {
				//catches the errors
				console.log(err);
			},
			() => {
				// gets the functions from storage refences the image storage in firebase by the children
				// gets the download url then sets the image from firebase as the value for the imgUrl key:
				storage.ref('images').child(imageAsFile.name).getDownloadURL().then((fireBaseUrl) => {
					setImageAsUrl((fbUrl) => fireBaseUrl);
					console.log(imageAsUrl);
				});
			}
		);
	};

	/// To get Universities Name from Database
	React.useEffect(() => {
		axios
			.get(`http://localhost:8000/university/`)
			.then((res) => {
				setUnivs(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const findChoosenUnivId = (university) => {
		for (var i = 0; i < univs.length; i++) {
			if (univs[i].universityName === university) {
				return univs[i]._id;
			}
		}
	};
	const handleSumbit = (event) => {
		event.preventDefault();
		const universityId = findChoosenUnivId(university);
		var InfoBook = {
			name: name,
			description: description,
			imgUrl: imageAsUrl,
			universityId: universityId,
			// userId: '5def8dd49c5b52050c8ab00f'
			userId: userIdFromToken
		};
		axios
			.post(`http://localhost:8000/profile/${userIdFromToken}/addBlueprintDonatedBook`, {
				name: name,
				description: description,
				imgUrl: imageAsUrl,
				universityId: universityId,
				userId: userIdFromToken
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log('All information of Book from front-end side: ', InfoBook);
	};

	const onUniChange = (event) => {
		console.log('The University is:  ', event.target.value);
		setUni(event.target.value);
	};

	const onNameChange = (event) => {
		console.log('The Name of the Book is:  ', event.target.value);
		setName(event.target.value);
	};

	const onDescChange = (event) => {
		console.log('The Description is :  ', event.target.value);
		setDesc(event.target.value);
	};

	return (
		<div>
			<br />
			<NavBar />
			<Container>
				<h2>Add New Book</h2>
				<br />
				<br />
				<br />
				<form noValidate autoComplete="off" onSubmit={handleSumbit}>
					<div>
						<br />
						<div>
							<TextField
								className={classes.textfield}
								id="filled-full-width"
								label="Enter the Name of Book"
								margin="normal"
								variant="filled"
								value={name}
								onChange={onNameChange}
							/>
						</div>

						<TextField
							className={classes.textfield}
							id="filled-full-width"
							label="Description"
							multiline={true}
							rows={2}
							margin="normal"
							variant="filled"
							onChange={onDescChange}
							value={description}
						/>
						<br />
						<br />
						<FormControl variant="filled" className={classes.formControl}>
							<InputLabel>University</InputLabel>

							<Select
								labelId="demo-simple-select-filled-label"
								id="demo-simple-select-filled"
								value={university}
								onChange={onUniChange}
							>
								{univs.map((univ1) => (
									<MenuItem key={univ1._id} value={univ1.universityName}>
										{univ1.universityName}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<br />
					<br />
					<Typography>Please Upload the image of the Book Then save it</Typography>
					<Button variant="contained" component="label">
						Upload File
						<input type="file" onChange={handleImageAsFile} style={{ display: 'none' }} />
					</Button>
					<Button variant="contained" onClick={handleFireBaseUpload}>
						Save Photo
					</Button>
					<br />
					<br />
					<br />
					<Button variant="contained" type="submit">
						Add Book
					</Button>
				</form>
			</Container>
		</div>
	);
}
