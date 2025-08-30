const express = require('express');
const Route = express.Router();

const { Singlepagecontrolers } = require('../Controlers/Singlepagecontrolers');
const verifyToken = require('../VerifyToken');

Route.route('/Singlepageroute').post( verifyToken ,Singlepagecontrolers);
module.exports = Route;