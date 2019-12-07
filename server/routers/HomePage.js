var express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

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
process.env.SECRET_KEY = "secret";

router.route("/signup").post((req, res) => {
  let body = req.body;
  // console.log(req.body);

  var userInfo = {
    email: body.email,
    password: body.password
  };
  // console.log(userInfo.password);
  bookBankDB.User.findOne({
    email: body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(body.password, 10, (err, hash) => {
          if (err) console.log(err);
          // console.log(hash);
          userInfo.password = hash;
          var user = new bookBankDB.User(userInfo);
          user
            .save()
            .then(user => {
              res.json({ status: user.email + " registered" }).catch(err => {
                res.send("error" + err);
              });
            })
            .catch(err => {
              res.send("error" + err);
            });
        });
      } else {
        res.send({ error: "this account is in use" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

router.route("/login").post((req, res) => {
  //   console.log(req.body);
  bookBankDB.User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            // _id: user._id,
            email: user.email,
            password: user.password
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "24h"
          });
          // console.log(token);
          res.send(token);
        } else {
          res.json({ error: "check your password" });
        }
      } else {
        res.json({ error: "user does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
