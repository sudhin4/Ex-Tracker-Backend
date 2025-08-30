const express = require('express');
const Route = express.Router();
const { UpdateInExControlers } = require('../Controlers/UpdatedInExControlers');
const verifyToken = require('../VerifyToken');

Route.route('/:id').post(verifyToken,UpdateInExControlers);

module.exports = Route;