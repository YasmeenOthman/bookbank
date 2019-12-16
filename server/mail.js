const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY || 'f0cb9bca8f9b1c11225fc9e56ef58699-f8b3d330-0fc98cc6',
        domain: process.env.DOMAIN || 'sandboxd8dc88001eea44219b996d0dc2160593.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, cb) => {
    const mailOptions = {
        from: 'bookbank@gmail.com',
        to: email,
        subject: 'Book bank support',
        text: 'Welcome to Book bank website,you have been registered successfully'
    }
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data)
        }
    });

}

module.exports = sendMail;


