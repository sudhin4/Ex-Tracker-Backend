const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const signupmodel = require('./Models/Signupmodel');


const secertkey = process.env.SECERT_KEY;

async function verifyToken(req, res, next) {


    const tokenvalue = req.cookies.Ts;

    if(!tokenvalue){
        res.json({
            valid:false,
            message:"Token not found"
        })
    }
    try{
        const payload = jwt.verify(tokenvalue,secertkey)
        
            const emailfromtoken = payload.email
            const isemailindb = await signupmodel.findOne({ Email: emailfromtoken });
            if(isemailindb){
                req.id = isemailindb
            }else{
                req.id=null
            }
            next();

    }
    catch(err){
        return res.json({
            success:false,
            message:'Invalid Token',
        })
    }

    




}

module.exports = verifyToken;