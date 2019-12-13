//add useState for handling the image as a file and then the image as a url from firebase
import React, { useState } from 'react';
import { storage } from '../firebase/firebase';

//add import for storage

function MediaUploader() {
	// const allInputs = { imgUrl: '' };
	// const allInputs = '';

	const [ imageAsFile, setImageAsFile ] = useState('');
	const [ imageAsUrl, setImageAsUrl ] = useState('hello initial');

	console.log(imageAsFile);
	const handleImageAsFile = (e) => {
		e.preventDefault();
		const image = e.target.files[0];
		setImageAsFile((imageFile) => image);
	};

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
					console.log();
					// const urlObj = { imgUrl: fireBaseUrl };
					console.log('from firebase');
					console.log(fireBaseUrl);

					// setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: 'hello' }));
					setImageAsUrl((fbUrl) => fireBaseUrl);
					console.log(imageAsUrl);
				});
			}
		);
	};

	// useEffect(() => {

	// });

	return (
		<div className="mediaUpload">
			{/* form for handling file upload */}
			<form>
				<input type="file" onChange={handleImageAsFile} />
				{/* // allows you to reach into your file directory and
        upload image to the browser */}
				<button onClick={handleFireBaseUpload}>upload to firebase</button>
				{/* <input></input> */}
			</form>
		</div>
	);
}

export default MediaUploader;
