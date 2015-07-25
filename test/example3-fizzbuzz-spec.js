var should = require('chai').should(),
    fizzbuzz = require('../lib/example3-fizzbuzz');

describe('#fizzbuzz', function() {
    var result;

    beforeEach(function() {
        result = fizzbuzz().split(',');
    });

    it('first number is a 1', function() {
        result[0].should.equal('1');
    });

    it('second number is a 2', function() {
        result[1].should.equal('2');
    });

    it('third number is a fizz', function() {
        result[2].should.equal('Fizz');
    });

    it('4th number is 4', function() {
        result[3].should.equal('4');
    });
});

