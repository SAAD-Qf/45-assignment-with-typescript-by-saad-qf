// printing a magician name in arrays,and making a function
function show_magicain(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// making the great function
function make_Great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// making a array 
var magician_names = ["harry poter", "amil bangali", "pandit"];
// printing the names through variable
var great_Names = make_Great(magician_names);
// print
console.log(great_Names);
