var express = require('express');
var router = express.Router();
const bookBankDB = require('../../database/db.js');
const sendMail = require('.././sendRequestMail.js');

//---------------- Universities Page --------------------------
router.route('/').get(function (req, res) {
	bookBankDB.getAllUniversities(function (err, allUniversities) {
		if (err) throw err;
		//console.log(allUniversities);
		res.json(allUniversities);
	});
});

//----------------Items Page Route --------------------------
router.route('/:univId').get(function (req, res) {
	const univId = req.params.univId;
	bookBankDB.getBooksOfUniversity(univId, function (err, booksOFTheUniversity) {
		if (err) throw err;
		//console.log(booksOFTheUniversity);
		res.json(booksOFTheUniversity);
	});
});

//----------------Books according to uni name Route --------------------------
router.route('/name').get(function (req, res) {
	const univname = req.params.universityName;
	console.log(univname);
	bookBankDB.getBooksOfUniversity(univname, function (err, booksOFTheUniversity) {
		if (err) throw err;
		//console.log(booksOFTheUniversity);
		res.json(booksOFTheUniversity);
	});
});

//----------------- Item Page Route----------------------------
router.route('/:univId/book/:bookId').get(function (req, res) {
	console.log('serving the item page route');
	var bookId = req.params.bookId;

	var itemPageData = {
		bluePrintBook: {},
		universityNameOfBook: '',
		donatedBooks: [],
		donatedBooksOwners: []
	};

	//---- get bluePrint book ----
	bookBankDB.getbluePrintBook(bookId, function (err, bluePrintBook) {
		if (err) throw err;
		//console.log(bluePrintBook);
		itemPageData['bluePrintBook'] = bluePrintBook;

		bookBankDB.getUnivName(bluePrintBook.universityId, function (err, uniName) {
			if (err) {
				throw err;
			}
			itemPageData.universityNameOfBook = uniName;
			console.log(uniName);

			//---- get donated books of that bluePrint book ----
			bookBankDB.getDonatedBooks(bookId, function (err, donatedBooks) {
				if (err) throw err;

				//console.log(donatedBooks);
				itemPageData['donatedBooks'] = donatedBooks;

				//get Users Id of the donated books
				var usersId = donatedBooks.map(function (doc) {
					return doc.userId;
				});

				bookBankDB.getDonatedBooksOwnersName(usersId, function (err, profiles) {
					if (err) throw err;
					itemPageData['donatedBooksOwners'] = profiles;
					res.json(itemPageData);
				});
			});
		});
	});
});

//------------- create a requested book ----------------------------
router.route('/:univId/book/:bookId/sendBookRequest').post(function (req, res) {
	var requestedBook = req.body;
	// console.log(requestedBook)
	var bookId = req.params.bookId;
	var requestedBookInfo = {
		requesterId: requestedBook.requesterId,
		ownerId: requestedBook.ownerId,
		bookId: bookId,
		donatedBookId: requestedBook.donatedBookId,
		isAccepted: false,
		createdAt: Date.now()
	};
	bookBankDB.saveRequestedBook(requestedBookInfo, function (err, requestedBook) {
		if (err) throw err;
		console.log(requestedBook);
		var ownerId = requestedBook.ownerId;
		bookBankDB.getOwnerEmailOfRequestedBook(ownerId, function (err, ownerDoc) {
			if (err) throw err;
			console.log("owner info of the requested book");
			var ownerEmail = ownerDoc.email;
			console.log(ownerEmail);
			// res.json({
			// 	requestedBook: requestedBook,
			// 	ownerEmail: ownerEmail
			// });
			sendMail(ownerEmail)
		});

	});


});

module.exports = router;
