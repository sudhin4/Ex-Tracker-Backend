const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Email:String,
    Category:String,
    TransactionName:String,
    Amount: Number,
    Date:String,
    Note:String,
    Time:String,
})

const InExModel = mongoose.model("Transaction Data",Schema);

module.exports = InExModel;