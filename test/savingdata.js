const assert = require('assert');
const EquityFund = require('../models/equityfund');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
describe('Saving Records', function () {

    //unit tests 
    it('Saves a record to the database', function (done) {
        const data_frag = new EquityFund({
            name: 'Blue Chip'
        });

        data_frag.save().then(function(){
            assert(data_frag.isNew === false)
            done()
        })
    })
})