var should = require('chai').should(),
    fizzbuzz = require('../lib/example3-fizzbuzz');

describe('#fizzbuzz', function() {
    var result;
    var provider = [
        {number: 1, expected: '1'},
        {number: 2, expected: '2'},
        {number: 3, expected: 'Fizz'},
        {number: 4, expected: '4'},
        {number: 5, expected: 'Buzz'},
    ];

    beforeEach(function() {
        result = fizzbuzz().split(',');
    });

    provider.forEach(function(provider) {
        it('number ' + provider.number + ' is a ' + provider.expected, function() {
            result[provider.number - 1].should.equal(provider.expected);
        });
    });
});

