const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const signupmodel = require('./Models/Signupmodel');


const secertkey = process.env.SECERT_KEY;

async function verifyToken(req, res, next) {

    const token = req.cookies.Ts;


    if (!token) {
        res.json({
            valid: false,
            message: 'Token Not found'
        })
    }
    else {
        try {
            const verifytkn = jwt.verify(token, secertkey);

            const tokenemail = verifytkn.email;


            const isemailindb = await signupmodel.findOne({ Email: tokenemail })


            if (isemailindb) {
                req.id = isemailindb.Email;

            }
            else {
                req.id = null
            }
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            })
        }
    }


}

module.exports = verifyToken;