var should = require('chai').should(),
    bank = require('../lib/example1-bank-transfer');

describe('#bank', function() {
    describe('#account', function() {
        it('create account returns account with correct balance', function() {
            var account = bank.createAccount(12);
            account.balance.should.equal(12);
        });

        it('credit account with 5 things has balance of 5 more thingys', function() {
            var account = bank.createAccount(12);
            account.credit(5);
            account.balance.should.equal(17);
        });
    });
    
    describe('transfer 5 thingys', function() {
        beforeEach(function() {
            this.result = bank.transfer(10, 10, 5);
        });

        it('reduces the balance of the payer', function() {
            this.result.payerBalance.should.equal(5);
        });

        it('increases the balance of the payee', function() {
            this.result.payeeBalance.should.equal(15);
        });
    });
});

