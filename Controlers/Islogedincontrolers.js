const signupmodel = require('../Models/Signupmodel');
const Userloginstatus = require('../Models/UserLoginStatus');


exports.Islogined = async (req, res, next) => {
    const cookietkn =  req.id;

    if(cookietkn){
        console.log(cookietkn)
        res.json({
            success:true,
            message:"Logedin",
            userdata:cookietkn
        })
    }
    else{
        res.status(401).json({
        success: false,
        message: "This Token is invalid"
    })
    }
   
}