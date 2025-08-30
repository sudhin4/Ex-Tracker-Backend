const express = require('express');
const Route = express.Router();
const verifytoken = require('../VerifyToken')
const { ChartDataControlers } = require("../Controlers/ChartDataControlers");

Route.route("/Chartdatasection").get(verifytoken,ChartDataControlers);

module.exports = Route;