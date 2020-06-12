const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// schema
const fundSchema = new Schema({
    type: String,
    returns: Number
});

const FundManagerSchema = new Schema({
    name: String,
    performance_returns: Number,
    funds: [fundSchema]
});

//Model - (collection_name,schema)
const FundManager = mongoose.model('fundmanager',FundManagerSchema)

module.exports = FundManager;