let jwt = require('jsonwebtoken');

process.env.SECRET_KEY = "secret";

let checkToken = (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    checkToken: checkToken
}



// const checkToken = (req, res, next) => {
//     const header = req.headers['authorization'];

//     if(typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const token = bearer[1];

//         req.token = token;
//         next();
//     } else {
//         //If header is undefined return Forbidden (403)
//         res.sendStatus(403)
//     }
// }
