var express = require("express");
var router = express.Router();
var bookBankDB = require("../../database/db.js");

router.route("/:userId").get(function(req, res) {
  var userId = req.params.userId;

  bookBankDB.getUserProfie(userId, function(err, profile) {
    if (err) throw err;
    console.log(profile);
    res.json(profile);
  });
});

module.exports = router;
