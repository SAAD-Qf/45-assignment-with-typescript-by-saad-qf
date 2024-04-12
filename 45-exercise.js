function crete_car(manufacturer, model) {
    // intilize a car object with manufacturer and model
    let options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // add options in car object
    options.forEach(function (options) {
        // to divide in to values so we use this method 
        var _a = options.split(":"), key = _a[0], value = _a[1];
        // this method to remove whide space so we use trim
        car[key.trim()] = [value.trim()];
    });
    // we use this method to save our function and call the function from diffrent variable
    return car;
}
// call the function
let car = crete_car("Honda", "Civic", "color:Black", "Sunroof:True");
// print this function to ensure that all informatian is running correctily
console.log(car);
