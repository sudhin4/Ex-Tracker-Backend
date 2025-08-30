const express  = require('express');
const Route = express.Router();
const { InExcontrolers } = require("../Controlers/InExControlers");
const verifyToken = require('../VerifyToken');

Route.route("/AddingIncomeExpanseData").post(verifyToken,InExcontrolers);

module.exports = Route;