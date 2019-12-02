const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bookBankDB = require("../database/db");
require("mongoose-query-random");

// app.use(express.static(path.join(__dirname, "../build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/", function(req, res) {
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

app.get("/", function(req, res) {
  console.log("serving the Root rout");

  var homePageData = {
    universities: [],
    recentBooks: [],
    totalUsers: 0,
    totalBooks: 0,
    totalUniversities: 0
  };

  //--------- Find 4 random universities ---------
  bookBankDB.findRandomUnis(function(err, randomUnis) {
    if (err) throw err;
    console.log(randomUnis);
    homePageData.universities = randomUnis;
    res.json(homePageData);
  });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
