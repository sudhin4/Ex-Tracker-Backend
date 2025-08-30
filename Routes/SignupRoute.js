const express = require('express');
const Route = express.Router();
const { signupcontrolers } = require('../Controlers/SignupControlers');

Route.route("/Singupnewuser").post(signupcontrolers);

module.exports = Route;