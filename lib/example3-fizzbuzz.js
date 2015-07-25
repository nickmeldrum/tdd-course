module.exports = function() {
    return [0,0,0].map(function(currentValue, index) {
        return index + 1;
    }).join(',');
};

