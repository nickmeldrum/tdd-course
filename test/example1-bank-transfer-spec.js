var should = require('chai').should(),
    bank = require('../lib/example1-bank-transfer');

describe('#bank', function() {
    describe('transfer 5 thingys', function() {
        beforeEach(function() {
            this.payer = {
                balance : 10
            };

            this.payee = {
                balance : 10
            };

            this.amount = 5;

            bank.transfer(this.payer, this.payee, this.amount);
        });

        it('reduces the balance of the payer', function() {
            this.payer.balance.should.equal(5);
        });

        it ('increases the balance of the payee', function() {
            this.payee.balance.should.equal(15);
        });
    });
});

