module.exports = function(villaProvider) {
    var villaProv = villaProvider;

    return {
        availableHolidays: function(week, year) {
            return villaProv(week, year);
        }
    };
};

