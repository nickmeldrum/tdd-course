var should = require('chai').should(),
    bank = require('../lib/example1-bank-transfer');

describe('#bank', function() {
    describe('transfer 5 thingys', function() {
        beforeEach(function() {
            this.payerBalance = 10;
            this.payeeBalance = 10;
            this.transferAmount = 5;
        });

        it('reduces the balance of the payer', function() {
            this.payerBalance = bank.changeBalance(this.payerBalance, -this.transferAmount);
            this.payerBalance.should.equal(5);
        });

        it('increases the balance of the payee', function() {
            this.payeeBalance = bank.changeBalance(this.payeeBalance, this.transferAmount);
            this.payeeBalance.should.equal(15);
        });
    });
});

