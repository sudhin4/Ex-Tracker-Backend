const express = require('express');
const Route = express.Router();
const { TotalbalanceControlers } = require('../Controlers/TotalbalanceControlers');
const verifyToken = require('../VerifyToken');

Route.route('/TotalBalance').get(verifyToken,TotalbalanceControlers);

module.exports = Route;