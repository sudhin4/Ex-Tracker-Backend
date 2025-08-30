const express = require("express");
const routee = express.Router();
const { loginroute } = require("../Controlers/LoginControlers.js")
const verifytoken = require('../VerifyToken.js')

routee.post("/LoginSection",loginroute);

module.exports = routee;