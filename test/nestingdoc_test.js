const assert = require('assert');
const mongoose = require('mongoose');
const FundManager = require('../models/fundmanager');

describe('Nesting Documents', function () {

    it('testing nested documents', function (done) {
        var fund_char = new FundManager({
            name: 'Warren Buffett',
            performance_returns: 12,
            funds: [{
                type: 'debts',
                returns: 18
            }]
        });

        fund_char.save().then(function () {
            fund_char.findOne({ name: 'Warren Buffett' }).then(function (result) {
                assert(result.funds.length === 1);
                done();
            });
        });
    });

    // adding funds into the fund_char variable
    it('Adds funds into the fund manager', function (done) {

        var fund_char = new FundManager({
            name: 'Warren Buffett',
            performance_returns: 12,
            funds: [{
                type: 'debts',
                returns: 18
            }]
        });

        FundManager.findOne({ name: 'Warren Buffett' }).then(function (record) {

            //adding fund types to the fund manager
            record.funds.push({
                type: 'ELSS',
                returns: 15
            });
            record.save().then(function () {
                FundManager.findOne({ name: 'Warren Buffett' }).then(function (result) {
                    assert(result.funds.length === 2);
                    done();
                });
            });
        });
    });
});