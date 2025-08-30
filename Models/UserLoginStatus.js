const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    Username:String,
    Date:Date
})

const Userloginstatus = mongoose.model("Userstatus",Schema);

module.exports = Userloginstatus;