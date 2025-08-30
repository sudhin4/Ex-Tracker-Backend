const express = require('express');
const Route = express.Router();
const { LinechartControlers } = require('../Controlers/LinechartControlers');
const verifyToken = require('../VerifyToken');

Route.route("/Linechartsdata").get(verifyToken,LinechartControlers);

module.exports = Route