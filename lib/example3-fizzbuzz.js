module.exports = function() {
    return [0,0,0,0].map(function(currentValue, index) {
        if (index === 2)
            return "Fizz";
        else
            return index + 1;
    }).join(',');
};

