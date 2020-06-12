const assert = require('assert');
const EquityFund = require('../models/equityfund');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('Deleting Records', function () {

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
    it('Deletes one record from the database', function (done) {
        EquityFund.findOneAndRemove({ name: 'Blue Chip' }, { useFindAndModify: false }).then(function () {
            EquityFund.findOne({ name: 'Blue Chip' }).then(function (result) {
                assert(result === null);
                done();
            })
        })
    });
})