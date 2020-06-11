const assert = require('assert');
const EquityFund = require('../models/equityfund');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
describe('Saving Records', function (done) {

    //unit tests 
    it('Saves a record to the database', function () {
        const data_frag = new EquityFund({
            name: 'Blue Chip'
        });

        data_frag.save().then(function(){
            assert(data_frag.isNew === false)
            done()
        })
    })
})