// printing a magician name in arrays,and making a function
function show_magicain(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// making function for the great
function great_magicain(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// making array
var magician_names = ["harry poter", "amil bangali", "pandit"];
// making acopy of this orignal array with slice function
var copy_magician_name = magician_names.slice();
// making a variable of this to print that array
var copy_graet_magicain = great_magicain(copy_magician_name);
// print both array orignal and copy
// origanl array
show_magicain(magician_names);
// copied array
show_magicain(copy_graet_magicain);
