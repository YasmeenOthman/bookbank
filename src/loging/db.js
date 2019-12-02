const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URI =
  "mongodb+srv://yasmeenothman:123456789rbk@cluster0-9v7hj.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("We're Connected!");
});

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String, required: true }
});

const Signin = mongoose.model("signin", userSchema);

//----save data for testing in atlas ---------
// let saveFun = () => {
//   var user = Signin({
//     email: "yasmeen.othman20@gmail.com",
//     password: "123456"
//   });
//   user.save(function(err, suc) {
//     if (err) {
//       console.log("error accured");
//     } else {
//       console.log("succsessed savign");
//     }
//   });
// };
// saveFun();
module.exports.Signin = Signin;
module.exports.userSchema = userSchema;
