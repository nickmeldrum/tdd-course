var should = require('chai').should(),
    example = require('../lib/example1-bank-transfer');

describe('#example', function() {
    it('returns 1', function() {
        var answer = example(); 

        answer.should.equal(1);
    });
});

