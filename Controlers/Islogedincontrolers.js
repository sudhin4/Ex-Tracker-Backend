const signupmodel = require('../Models/Signupmodel');
const Userloginstatus = require('../Models/UserLoginStatus');


exports.Islogined = async (req, res, next) => {
    const cookietkn =  req.id;
    res.json({
        success:true,
        message:"Fuckkk"
    })
    const erormsg = req.message;

    
    if(cookietkn){
        Userloginstatus.create({Username:cookietkn,Date:new Date()})
        res.json({
            success:true,
            message:"Logedin",
            userdata:cookietkn
        })
    }
    else{
        res.json({
        success: false,
        message: "This Token is invalid"
    })
    }
   
}