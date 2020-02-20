var express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sendMail = require('.././mail.js');

var router = express.Router();
const bookBankDB = require('../../database/db.js');

//------------------Serving the Homepage ------------------
router.route('/getData').get(function (req, res) {
	console.log('serving the Root rout');
	// console.log(req.body);
	var homePageData = {
		universities: [],
		recentBooks: [],
		allBooks: [],
		totalUsers: 0,
		totalDonatedBooks: 0,
		totalUniversities: 0
	};

	// --------- Find 4 random universities ---------
	bookBankDB.findRandomUnis(function (err, randomUnis) {
		if (err) throw err;
		// console.log(randomUnis);
		homePageData.universities = randomUnis;
		//--------- Find  recently added Books ---------
		bookBankDB.findRecentlyAddedBooks(function (err, books) {
			if (err) throw err;
			//console.log(books);
			homePageData.recentBooks = books;
			//--------- Find Number of Donated Books ---------
			bookBankDB.countDonatedBooks(function (err, numberOfDonatedBooks) {
				if (err) {
					throw err;
				}
				//console.log(numberOfDonatedBooks);
				homePageData.totalDonatedBooks = numberOfDonatedBooks;
				//--------- Find Number of Universities ---------
				bookBankDB.countUniversities(function (err, numberOfUnis) {
					if (err) {
						throw err;
					}
					//console.log(numberOfUnis);
					homePageData.totalUniversities = numberOfUnis;
					//--------- Find Number of Users ---------
					bookBankDB.countUsers(function (err, numberOfUsers) {
						if (err) {
							throw err;
						}
						// console.log(numberOfUsers);
						homePageData.totalUsers = numberOfUsers;
						//now homePageData have all the data from the database.
						bookBankDB.getAllBooks(function (err, allBooks) {
							if (err) {
								throw err;
							}
							homePageData.allBooks = allBooks;

							res.json(homePageData);

						})
					});
				});
			});
		});
	});
});

//------------------Get All Books (BluePrint books) ------------------
router.route('/allBooks').get(function (req, res) {
	var allBooksObj = {
		allBluePrintBooks: [],
		universities: []
	};
	bookBankDB.getAllBooks(function (err, allBooks) {
		if (err) throw err;

		allBooksObj.allBluePrintBooks = allBooks;

		bookBankDB.getAllUniversities(function (err, univs) {
			if (err) throw err;
			// console.log(univs);
			allBooksObj.universities = univs;
			res.json(allBooksObj);
		});
	});
});

//----------------------------input validation-------------------------------------------
const validateRegisterInput = require('../validation/signupValidation.js');
const validateLoginInput = require('../validation/loginValidation.js');
//---------------------------------------------------------------------------------------

//--------------Authentication--------------------
//------------------------------------------------
process.env.SECRET_KEY = 'secret';

router.route('/signup').post((req, res) => {
	let body = req.body;

	// Form validation
	const { errors, isValid } = validateRegisterInput(body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	var userInfo = {
		userName: body.userName,
		email: body.email,
		password: body.password
	};

	bookBankDB.User
		.findOne({
			email: body.email
		})
		.then((user) => {
			if (user) {
				return res.status(400).json({ msg: 'user already exists! Plz login' });
			}
			var user = new bookBankDB.User(userInfo);

			//-------create profile doc for the new user------------
			var newProfile = {
				userId: user._id,
				universityId: '',
				userAvatar: 'http://www.hts.jo/hts/assets/images/avatars/avatar1_big@2x.png'
			};
			bookBankDB.saveProfile(newProfile, function (err, profileDoc) {
				if (err) throw err;
				console.log(profileDoc);
			});
			bcrypt.hash(body.password, 10, (err, hash) => {
				if (err) throw err;
				user.password = hash;
				console.log(hash);
				user
					.save()
					.then((user) => {
						const payload = {
							userId: user._id,
							userName: user.userName,
							email: user.email
						};
						let token = jwt.sign(
							payload,
							process.env.SECRET_KEY,
							{
								expiresIn: '24h'
							},
							(err, token) => {
								if (err) res.json({ success: false, token: token, user: user });
								res.json({ success: true, token: token, user: user });
							}
						);
					})
					.catch((err) => {
						res.send('error' + err);
					});
			});
		});
	sendMail(req.body.email);
});

//--------------------------------------------
//---------------login------------------------
//--------------------------------------------
router.route('/login').post((req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	bookBankDB.User
		.findOne({
			email: req.body.email
		})
		.then((user) => {
			if (user) {
				if (bcrypt.compareSync(req.body.password, user.password)) {
					const payload = {
						userId: user._id,
						userName: user.userName,
						email: user.email,
						password: user.password
					};

					let token = jwt.sign(payload, process.env.SECRET_KEY, {
						expiresIn: '24h'
					});
					// console.log(token);
					res.json({ success: true, message: 'Authentication successful!', token: token, user: user });
				} else {
					res.json({ success: false, error: 'check your password' });
				}
			} else {
				res.json({ success: false, error: 'invalid email or password \n join our website' });
			}
		})
		.catch((err) => {
			res.send('error: ' + err);
		});
	
});

module.exports = router;
