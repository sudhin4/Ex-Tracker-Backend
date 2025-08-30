const signupmodel = require('../Models/Signupmodel');
const Userloginstatus = require('../Models/UserLoginStatus');


exports.Islogined =  (req, res, next) => {
    const cookietkn =  req.id;

    const Email = cookietkn.Email;

    if(cookietkn){
        console.log(cookietkn)
        res.json({
            success:true,
            message:"Logedin",
            userdata:Email
        })
    }
    else{
        res.status(401).json({
        success: false,
        message: "This Token is invalid"
    })
    }
   
}