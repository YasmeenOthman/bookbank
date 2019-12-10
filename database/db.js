var mongoose = require('mongoose');
require('mongoose-query-random');
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//-------------------MongoURI----------------------------
const URI = 'mongodb+srv://bookbank:bookbank@book-bank-3ough.mongodb.net/test?retryWrites=true&w=majority';

//-------------------Connection Setup-------------------------
mongoose.connect(URI, function(err, db) {
	if (err) {
		console.log('Unable to connect to the server. Please start the server. Error:', err);
	} else {
		console.log('Mongoose Connected to Server successfully!');
	}
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log("We're Connected: TAZ");
});

//=======================================================
//-------------------Book Schema-------------------------
//=======================================================
var booksSchema = mongoose.Schema({
	bookName: { type: String },
	bookCover: { type: String },
	bookDescription: { type: String },
	universityId: { type: String },
	createdAt: { type: Date, default: Date.now }
});

//-------------------Book Model-------------------------
let Book = mongoose.model('books', booksSchema);

var saveBook = function(book, callBack) {
	// console.log('in save function');
	var newBook = new Book({
		bookName: book.bookName,
		bookCover: book.bookCover,
		bookDescription: book.bookDescription,
		universityId: book.universityId,
		createdAt: book.createdAt
	});

	newBook.save(callBack);
};

//=======================================================
//-------------------Donated Book Schema-------------------------
//=======================================================
var donatedBooksSchema = mongoose.Schema({
	userId: { type: String },
	bookId: { type: String },
	availability: { type: Boolean },
	createdAt: { type: Date, default: Date.now }
});

//-------------------Donated Book Model-------------------------
let DonatedBook = mongoose.model('donated-books', donatedBooksSchema);

var saveDonatedBook = function(donatedBook, callBack) {
	console.log('in save function');
	var newDonatedBook = new DonatedBook({
		userId: donatedBook.userId,
		bookId: donatedBook.bookId,
		availability: donatedBook.availability,
		createdAt: donatedBook.createdAt
	});

	newDonatedBook.save(callBack);
};

//=======================================================
//-------------------User Schema-------------------------
//=======================================================
var userSchema = mongoose.Schema({
	userName: { type: String },
	email: { type: String, unique: true },
	password: { type: String }
});

//-------------------User Model-------------------------
var User = mongoose.model('user', userSchema);

var saveUser = function(user) {
	var newUser = new User({
		userName: user.userName,
		email: user.email,
		password: user.password
	});

	newUser.save(function(err, res) {
		if (err) {
			throw err;
		}
		console.log('this user was added now', res);
	});
};

//=======================================================
//-------------------Profile Schema-------------------------
//=======================================================

var profileSchema = mongoose.Schema({
	userId: { type: String },
	universityId: { type: String },
	userAvatar: { type: String }
});

//-------------------Profile Model-------------------------
var Profile = mongoose.model('profiles', profileSchema);

var saveProfile = function(profile) {
	var newProfile = new Profile({
		userId: profile.userId,
		userName: profile.userName,
		universityId: profile.universityId,
		userAvatar: profile.userAvatar
	});

	newProfile.save(function(err, res) {
		if (err) {
			throw err;
		}
		console.log('this profile has been was added', res);
	});
};

//=======================================================
//-------------------University Schema-------------------
//=======================================================

var universitySchema = mongoose.Schema({
	universityName: { type: String },
	universityImg: { type: String }
});

//-------------------University Model----------------------
var University = mongoose.model('universities', universitySchema);

var saveUniversity = function(uni) {
	var newUniversity = new University({
		universityName: uni.universityName,
		universityImg: uni.universityImg
	});

	newUniversity.save(function(err, res) {
		if (err) {
			throw err;
		}
		console.log('this University has been was added', res);
	});
};

//=======================================================
//-------------------My function ------------------------
//=======================================================

//-------------------Find 4 random universities ---------
var findRandomUnis = function(callback) {
	University.find().random(4, true, callback);
};
//--------- Find  recently added Books ---------
var findRecentlyAddedBooks = function(callback) {
	Book.find().sort({ createdAt: 'desc' }).limit(4).exec(callback);
};

//--------- count Donated Books ---------
var countDonatedBooks = function(callBack) {
	DonatedBook.count({}, callBack);
};

//--------- count Universities ---------
var countUniversities = function(callBack) {
	University.count({}, callBack);
};

//--------- count Users---------
var countUsers = function(callBack) {
	User.count({}, callBack);
};

//--------- get the books of a university---------
var getBooksOfUniversity = function(univId, callBack) {
	Book.find({ universityId: univId }).sort({ createdAt: 'desc' }).exec(callBack);
};

//---------get bluePrint book from its Id ---------
var getbluePrintBook = function(bluePrintId, callBack) {
	Book.findOne({ id: bluePrintId }).exec(callBack);
};

//--------- get the donated books from the bluePrint Book Id ---------
var getDonatedBooks = function(bluePrintId, callBack) {
	DonatedBook.find({ bookId: bluePrintId }).sort({ createdAt: 'asc' }).exec(callBack);
};

//-------- get usres names of donated books from profile collection -------
var getDonatedBooksOwnersName = function(usersId, callBack) {
	Profile.find({ userId: { $in: usersId } }, callBack);
};

//----- Git user's Profile ---------
var getUserProfie = function(userId, callBack) {
	Profile.findOne({ id: userId }).exec(callBack);
};

// -------- get all Universities ---------
var getAllUniversities = function(callBack) {
	University.find({}).exec(callBack);
};

module.exports.saveBook = saveBook;
module.exports.saveDonatedBook = saveDonatedBook;
module.exports.saveUser = saveUser;
module.exports.saveProfile = saveProfile;
module.exports.saveUniversity = saveUniversity;
module.exports.findRandomUnis = findRandomUnis;
module.exports.findRecentlyAddedBooks = findRecentlyAddedBooks;
module.exports.countDonatedBooks = countDonatedBooks;
module.exports.countUniversities = countUniversities;
module.exports.countUsers = countUsers;
module.exports.getBooksOfUniversity = getBooksOfUniversity;
module.exports.getDonatedBooks = getDonatedBooks;
module.exports.getDonatedBooksOwnersName = getDonatedBooksOwnersName;
module.exports.getbluePrintBook = getbluePrintBook;
module.exports.getUserProfie = getUserProfie;
module.exports.getAllUniversities = getAllUniversities;
module.exports.User = User;
