const assert = require('assert');
const EquityFund = require('../models/equityfund');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('Updating Records', function () {

    var data_frag;

    beforeEach(function (done) {
        data_frag = new EquityFund({
            name: 'Blue Chip',
            returns: 11,
        });

        data_frag.save().then(function () {
            assert(data_frag.isNew === false)
            done();
        })
    })

    //unit tests 
    it('Finds and Updates one record from the database', function (done) {
        EquityFund.findOneAndUpdate({ name: 'Blue Chip' }, { name: 'Large Assets' }, { useFindAndModify: false }).then(function () {
            EquityFund.findOne({ _id: data_frag._id }).then(function (result) {
                assert(result.name === 'Large Assets');
                done();
            })
        })
    });

    //update operators
    it('Updates Operators(fields) in the database', function (done) {
        EquityFund.updateOne({}, { $inc: { returns: 1 } }).then(function () {
            EquityFund.findOne({ name: 'Blue Chip' }).then(function (result) {
                assert(result.returns === 12);
                done();
            })
        })
    });
})