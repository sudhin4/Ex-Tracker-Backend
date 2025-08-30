const express = require('express');
const { Islogined } = require('../Controlers/Islogedincontrolers');
const verifyToken = require('../VerifyToken');
const route = express.Router();


route.route("/Islogedin").get(verifyToken,Islogined);
module.exports = route