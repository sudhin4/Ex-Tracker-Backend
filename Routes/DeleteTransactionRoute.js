const express = require("express");
const Route = express.Router();
const { DeleteTransactionControlers } = require('../Controlers/DeleteTransactionRoute');

Route.route('/DeleteTransaction/:id').post(DeleteTransactionControlers);

module.exports = Route;