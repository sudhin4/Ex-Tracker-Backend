const signupmodel = require("../Models/Signupmodel")
const bcrypt = require('bcrypt');
const webtoken = require('jsonwebtoken');
const cookies = require('cookie-parser');
const { json } = require('body-parser');


exports.loginroute = async (req, res, next) => {

    const logindata = req.body;




    const emaildata = logindata.Email;
    const passworddata = logindata.Password;

    const secertkey = process.env.SECERT_KEY;
    const saltround = 10; // hasing salt



    const findedemail = await signupmodel.findOne({ Email: emaildata });


    if (findedemail) {
        const hasedpassword = findedemail.Password
        const dbemail = findedemail.Email;

        bcrypt.compare(passworddata, hasedpassword, function (err, result) { // hasing password method
            if (result) {
                const loginpayload = {
                    email: dbemail
                }
                const token = webtoken.sign(loginpayload, secertkey);

                res.cookie('Ts', token, {
                    httpOnly: true,
                     secure: false,
                    sameSite: 'none',
                    path: '/',

                });
                res.json({
                    success: true,
                    message: "Correct Password Logged"
                })

            }
            else {
                res.json({
                    success: false,
                    data: "Password is wrong"
                })
            }

        })

    }
    else{
        res.json({
            success:false,
            data:"Email is invalid"
        })
    }









} 