module.exports = function() {
    var arr = [];
    for (var index = 1; index < 100; index++) {
        if (index === 3)
            arr.push("Fizz");
        else if (index === 5)
            arr.push("Buzz");
        else
            arr.push(index);
    }
        
    return arr.join(',');
};

