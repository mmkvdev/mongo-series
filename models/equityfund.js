const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// schema
const EquitySchema = new Schema({
    name: String,
    returns: Number
});

//Model
const EquityFund = mongoose.model('equityfund',EquitySchema)

module.exports = EquityFund