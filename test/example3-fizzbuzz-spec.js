var should = require('chai').should(),
    fizzbuzz = require('../lib/example3-fizzbuzz');

describe('#fizzbuzz', function() {
    it('first number is a 1', function() {
        var result = fizzbuzz();
        result[0].should.equal('1');
    });
});

