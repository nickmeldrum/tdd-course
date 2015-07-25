var should = require('chai').should();
var holidayProvider = require('../lib/example4-jg-holidays');

describe('#holidays', function() {
    var villaName = 'villa revolta';

    function holidayFactory(villaArr, flightAvailable) {
        var villas = function() { return villaArr; };
        var flights = function() { return flightAvailable; };
        return holidayProvider(villas, flights);
    }

    it('no holidays if no villas', function() {
        var holidays = holidayFactory([]);
        holidays.availableHolidays(1, 1975).length.should.equal(0);
    });

    it('returns revolting villa when available', function() {
        var holidays = holidayFactory([villaName], true);

        holidays.availableHolidays(1, 1975)[0]
            .should.equal(villaName); 
    });

    it('does not return villa when flight not available', function() {
        var holidays = holidayFactory([villaName], false);

        holidays.availableHolidays(1, 1975).length.should.equal(0);
    });
});

