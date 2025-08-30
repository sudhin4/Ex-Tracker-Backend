const singpumodel = require('../Models/Signupmodel');
const bcrypt = require('bcrypt');
const webtoken = require('jsonwebtoken');
const cookies = require('cookie-parser');
const { json } = require('body-parser');


exports.signupcontrolers = async (req, res, next) => {
    const singupdetails = req.body;
    const UserEmail = singupdetails.Email;
    const Userpassword = singupdetails.Password
    const salt = 10;

    const secert_key = process.env.SECERT_KEY


    const isemailalready = await singpumodel.findOne({ Email: UserEmail });
    //chech email is already in database
    if (isemailalready) {
        res.json({
            success: false,
            message: "Email is Already used Login Please"
        })
    }

    // if not in database first encrypt and append the database, send token
    else {
        bcrypt.hash(Userpassword, salt, function (error, hash) {
            try {
                singpumodel.create({ Email: UserEmail, Password: hash })
                const payload = {
                    email: UserEmail
                }
                const token = webtoken.sign(payload, secert_key);

                res.cookie('Ts', token, {
                    httpOnly: true,
                     secure: false,
                    sameSite: 'lax',
                    path: '/',

                });



                res.json({
                    success: true,
                    message: "Details is append in Database",

                })
            }
            catch  {
                res.json({
                    success: false,
                    message: "Error in hasing"
                })
            }
        })
    }


}

