const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const db = require("./db.js");
// app.use(express.static(__dirname + "/client/dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3001;

process.env.SECRET_KEY = "secret";

//-------------registration-----------------
app.post("/signup", (req, res) => {
  let body = req.body;
  //   console.log(body);
  var userInfo = {
    username: body.username,
    email: body.email,
    password: body.password
  };
  //   console.log(userInfo);
  db.Signin.findOne({
    email: body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(body.password, 10, (err, hash) => {
          userInfo.password = hash;
          db.Signin.create(userInfo).then(user => {
            res.json({ status: user.email + "registered" }).catch(err => {
              res.send("error" + err);
            });
          });
        });
      } else {
        res.send({ error: "this account is in used" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});
//------------login-----------------------
app.post("/login", (req, res) => {
  //   console.log(req.body);
  db.Signin.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "1h"
          });
          //   console.log(token);
          res.send(token);
        } else {
          res.json({ error: "check your password" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`server is  listening on port ${port}!`));
