const express = require('express');
const Route = express.Router();
const { LogoutControlers } = require('../Controlers/LogoutControlers');
const verifyToken = require('../VerifyToken');

Route.route('/logoutroute').get(verifyToken,LogoutControlers);

module.exports = Route;