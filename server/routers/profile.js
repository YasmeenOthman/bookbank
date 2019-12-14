var express = require('express');
var router = express.Router();
var bookBankDB = require('../../database/db.js');

router.route('/:userId').get(function(req, res) {
	var userId = req.params.userId;

	bookBankDB.getUserProfie(userId, function(err, profile) {
		if (err) throw err;
		console.log(profile);
		res.json(profile);
	});
});

router.route('/addBlueprintDonatedBook').post(function(req, res) {
	// var { name, description, imgUrl, uniId, userId } = req.body;
	const dataFromClient = req.body;

	// console.log(dataFromClient);

	// console.log(req.body);
	var dateOfCreation = Date.now();
	var bluePrintBookInfo = {
		bookName: dataFromClient.name,
		bookCover: dataFromClient.description,
		bookDescription: dataFromClient.imgUrl,
		universityId: dataFromClient.uniId,
		createdAt: Date.now()
	};

	var donatedBookInfo = {
		userId: dataFromClient.userId,
		bookId: '',
		availability: true,
		createdAt: Date.now()
	};
	// console.log(bluePrintBookInfo);
	// console.log(donatedBookInfo);
	// res.json('body here is ');

	//-------------Create New BluePrint doc (Book Doc)-------------------
	bookBankDB.saveBook(bluePrintBookInfo, function(err, bluePrintBook) {
		if (err) throw err;

		console.log('New Blueprint book has been adde successfully!' + bluePrintBook);
		var bluePrintId = bluePrintBook._id;
		console.log(bluePrintId);
		donatedBookInfo['bookId'] = bluePrintId;
		console.log(donatedBookInfo);

		//-------------Create New DonatedBook doc-------------------
		bookBankDB.saveDonatedBook(donatedBookInfo, function(err, newDonatedBook) {
			if (err) {
				throw err;
			}

			console.log('new donated book has been added ', newDonatedBook);
			res.json('New Book (BP and Donated has been added');
		});
	});
});
module.exports = router;
