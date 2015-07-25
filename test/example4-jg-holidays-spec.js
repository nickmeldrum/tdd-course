var should = require('chai').should(),
    holidayProvider = require('../lib/example4-jg-holidays');

describe('#holidays', function() {
    it('no holidays if no villas', function() {
        var villas = function() { return []; };
        var holidays = holidayProvider(villas);
        holidays.availableHolidays(1, 1975).length.should.equal(0);
    });

    it('returns revolting villa when available', function() {
        var villas = function() { return ['villa revolta']; };
        var holidays = holidayProvider(villas);

        holidays.availableHolidays(1, 1975)[0]
            .should.equal('villa revolta'); 
    });

});

