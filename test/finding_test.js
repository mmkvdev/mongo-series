const assert = require('assert');
const EquityFund = require('../models/equityfund');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('Finding Records', function () {

    beforeEach(function (done) {
        const data_frag = new EquityFund({
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
})