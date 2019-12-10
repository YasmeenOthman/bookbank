import firebase from 'firebase/app';
import 'firebase/storage';

//---------------------web app's Firebase configuration-----------------
//-----------------------------firebase SDK-----------------------------
var firebaseConfig = {
	apiKey: 'AIzaSyBnPbCU0f9v25AjXr2vK910YNuckW5bquI',
	authDomain: 'bookupload-e1914.firebaseapp.com',
	databaseURL: 'https://bookupload-e1914.firebaseio.com',
	projectId: 'bookupload-e1914',
	storageBucket: 'bookupload-e1914.appspot.com',
	messagingSenderId: '632702229089',
	appId: '1:632702229089:web:b8d7772dcc3eb22b3aa820',
	measurementId: 'G-XH5054Q1HT'
};

//-------------------------Initialize Firebase-----------------------------
firebase.initializeApp(firebaseConfig);
//-------------------------Initialize the Storage--------------------------
const storage = firebase.storage();

export { storage, firebase as default };
