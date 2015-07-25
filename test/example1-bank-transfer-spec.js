var should = require('chai').should(),
    bank = require('../lib/example1-bank-transfer')();

describe('#bank-transfer', function() {
    it('reduces the balance of the payer', function() {
        var payer = {
            balance : 10
        };

        var payee = {
            balance : 10
        };

        var amount = 5;

        bank.transfer(payer, payee, amount);

        payer.balance.should.equal(5);
    });
});

