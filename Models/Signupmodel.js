const mongoose = require('mongoose')

const singupsechma = new mongoose.Schema({
    Email: String,
    Password: String,
});

const singpumodel = mongoose.model('Signup', singupsechma);

module.exports = singpumodel;