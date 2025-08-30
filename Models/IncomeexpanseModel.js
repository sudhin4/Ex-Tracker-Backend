const  mongoose = require('mongoose');

const incomeexpansedataschema = new mongoose.Schema({
    email:String,
    password:String,
})

const incomeexpansemodel = mongoose.model('Userdetails',incomeexpansedataschema);

module.exports = incomeexpansemodel;