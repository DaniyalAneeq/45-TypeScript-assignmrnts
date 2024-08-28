/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
function car_info(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var make_car = {
        manufacturer: manufacturer,
        model: model
    };
    optional.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        make_car[key.trim()] = value.trim();
    });
    return make_car;
}
var ready_car = car_info("Mercedes", "GLS", "Color:Black", "ExhaustSilencer: true");
console.log(ready_car);
