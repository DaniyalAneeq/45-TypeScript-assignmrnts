var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var put;
    if (number === 1) {
        put = "st";
        console.log("".concat(number).concat(put));
    }
    else if (number === 2) {
        put = "nd";
        console.log("".concat(number).concat(put));
    }
    else if (number === 3) {
        put = "rd";
        console.log("".concat(number).concat(put));
    }
    else {
        put = "th";
        console.log("".concat(number).concat(put));
    }
});
