const express = require("express");
const Route = express.Router();
const { LastTransactionControlers } = require('../Controlers/LastTransactionControlers');
const verifyToken = require("../VerifyToken");

Route.route("/LastTransactionPage").get( verifyToken,LastTransactionControlers)

module.exports = Route;