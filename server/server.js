const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bookBankDB = require("../database/db");
require("mongoose-query-random");
var homepageRouter = require("./routers/homePage.js");
var universityRouter = require("./routers/university.js");
var profileRouter = require("./routers/profile.js");

// app.use(express.static(path.join(__dirname, "../build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", homepageRouter);
app.use("/university", universityRouter);
app.use("/profile", profileRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
