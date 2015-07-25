module.exports = function(villaProvider, flightProvider) {
    var villaProv = villaProvider;
    var flightProv = flightProvider;

    return {
        availableHolidays: function(week, year) {
            if (flightProv())
                return villaProv();
            else 
                return [];
        }
    };
};

