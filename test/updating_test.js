const assert = require('assert');
const EquityFund = require('../models/equityfund');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('Updating Records', function () {

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
    it('Finds and Updates one record from the database', function (done) {
        EquityFund.findOneAndUpdate({ name: 'Blue Chip' }, { name: 'Large Assets' }, { useFindAndModify: false }).then(function () {
            EquityFund.findOne({ _id: data_frag._id }).then(function (result) {
                assert(result.name === 'Large Assets');
                done();
            })
        })
    });
})