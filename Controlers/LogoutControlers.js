const Signupmodel = require('../Models/Signupmodel.js')
const webtoken = require('jsonwebtoken');
const cookies = require('cookie-parser');


exports.LogoutControlers = async(req , res , next)=>{
    const useremail = req.id;

    const userin = Signupmodel.findOne({Email:useremail})

    if(userin){
        res.clearCookie('Ts',{path:"/"});
        res.json({
            success:true,
            message:"Logout successfully"
        })
    }
    else{
        res.json({
            success:false,
            message:"Token not founded"
        })
    }
}