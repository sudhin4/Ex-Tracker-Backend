const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const signupmodel = require('./Models/Signupmodel');


const secertkey = process.env.SECERT_KEY;

async function verifyToken(req, res, next) {


    try {
        const token = req.cookies.Ts;
        if (!token) return resjson({ message: "No token" });
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.id = payload.email;
        
    }
    catch (error) {
        console.log("Error in verify token", error);
        res.json({ message: "Invalid token" });
    }
next();



}

module.exports = verifyToken;