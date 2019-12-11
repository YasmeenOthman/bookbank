router.route('/').get(function(req, res) {
	console.log('serving the Root rout');
	// console.log(req.body);
	var homePageData = {
		universities: [],
		recentBooks: [],
		totalUsers: 0,
		totalDonatedBooks: 0,
		totalUniversities: 0
	};

	// --------- Find 4 random universities ---------
	bookBankDB.findRandomUnis(function(err, randomUnis) {
		if (err) throw err;
		// console.log(randomUnis);
		homePageData.universities = randomUnis;
		//--------- Find  recently added Books ---------
		bookBankDB.findRecentlyAddedBooks(function(err, books) {
			if (err) throw err;
			console.log(books);
			homePageData.recentBooks = books;
			//--------- Find Number of Donated Books ---------
			bookBankDB.countDonatedBooks(function(err, numberOfDonatedBooks) {
				if (err) {
					throw err;
				}
				console.log(numberOfDonatedBooks);
				homePageData.totalDonatedBooks = numberOfDonatedBooks;
				//--------- Find Number of Universities ---------
				bookBankDB.countUniversities(function(err, numberOfUnis) {
					if (err) {
						throw err;
					}
					console.log(numberOfUnis);
					homePageData.totalUniversities = numberOfUnis;
					//--------- Find Number of Users ---------
					bookBankDB.countUsers(function(err, numberOfUsers) {
						if (err) {
							throw err;
						}
						console.log(numberOfUsers);
						homePageData.totalUsers = numberOfUsers;
						//now homePageData have all the data from the database.
						res.json(homePageData);
					});
				});
			});
		});
	});
});