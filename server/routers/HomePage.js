var express = require("express");
var router = express.Router();
const bookBankDB = require("../../database/db.js");

router.route("/").get(function(req, res) {
  console.log("serving the Root rout");
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

// router.route("/").get(function(req, res) {
//   console.log("serving the Root rout");

//   var homePageData = {
//     universities: [],
//     recentBooks: [],
//     totalUsers: 0,
//     totalDonatedBooks: 0,
//     totalUniversities: 0
//   };

//   // --------- Find 4 random universities ---------
//   bookBankDB.findRandomUnis(function(err, randomUnis) {
//     if (err) throw err;
//     console.log(randomUnis);
//     homePageData.universities = randomUnis;
//     ///res.json(homePageData);
//   });

//   //--------- Find  recently added Books ---------
//   bookBankDB.findRecentlyAddedBooks(function(err, books) {
//     if (err) throw err;
//     console.log(books);
//     homePageData.recentBooks = books;
//     //res.json(homePageData);
//   });
//   //--------- Find Number of Donated Books ---------
//   bookBankDB.countDonatedBooks(function(err, numberOfDonatedBooks) {
//     if (err) {
//       throw err;
//     }
//     console.log(numberOfDonatedBooks);
//     homePageData.totalDonatedBooks = numberOfDonatedBooks;
//   });
//   //--------- Find Number of Universities ---------
//   bookBankDB.countUniversities(function(err, numberOfUnis) {
//     if (err) {
//       throw err;
//     }
//     console.log(numberOfUnis);
//     homePageData.totalUniversities = numberOfUnis;
//   });
//   //--------- Find Number of Users ---------
//   bookBankDB.countUsers(function(err, numberOfUsers) {
//     if (err) {
//       throw err;
//     }
//     console.log(numberOfUsers);
//     homePageData.totalUsers = numberOfUsers;
//     //now homePageData have all the data from the database.
//     res.json(homePageData);
//   });
// });

module.exports = router;

// router.rout().get(function(req, res) {
//   console.log("serving the root rout");
// bookBankDB.saveBook({
//   id: 2,
//   bookName: "C++",
//   bookCover:
//     "https://images-na.ssl-images-amazon.com/images/I/51KPj3gS0vL.jpg",
//   bookDescription: "book desc",
//   universityId: 2,
//   createdAt: Date.now()
// });

// bookBankDB.saveDonatedBook({
//   id: 2,
//   userId: 1,
//   bookId: 2,
//   availability: true,
//   createdAt: Date.now()
// });

// bookBankDB.saveUser({
//   id: 2,
//   email: "yasmeen@test.com",
//   password: "345"
// });

// bookBankDB.saveProfile({
//   id: 2,
//   userId: 2,
//   userName: "yasmeen",
//   universityId: 2,
//   userAvatar:
//     "https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg"
// });

// bookBankDB.saveUniversity({
//   id: 2,
//   universityName: "Khadori"
// });

// res.json("Hello Bookbank !!");
// });
