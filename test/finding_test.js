const assert = require('assert');
const EquityFund = require('../models/equityfund');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('Finding Records', function () {

    var data_frag;

    beforeEach(function (done) {
        data_frag = new EquityFund({
            name: 'Blue Chip'
        });

        data_frag.save().then(function () {
            assert(data_frag.isNew === false)
            done();
        })
    })

    //unit tests 
    it('Find one record from the database', function (done) {
        EquityFund.findOne({ name: 'Blue Chip' }).then(function (result) {
            assert(result.name === 'Blue Chip');
            done();
        })
    })

    //finding a record by ObjectID
    it('Find a record by ID from the database', function (done) {
        EquityFund.findOne({ _id: data_frag._id }).then(function (result) {
            assert(result._id.toString() === data_frag._id.toString());
            done();
        })
    })
})