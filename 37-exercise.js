"use strict";
// make the T-shirt fuction, making a variable in function/like size: and printmassege:is variable.  // large shirt
function make_shirt(size = "Large", printmassege = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${printmassege} prints on shirt`);
}
// calling back to function by defult values.
make_shirt("Large", "i love typescript");
// 2nd statement                                // medium shirt
function makeshirt(size = "Medium", printmassege = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${printmassege} prints on shirt`);
}
// calling back to function by defult value
makeshirt("Medium", "i love typescript");
// 3rd statement                       // small shirt
function makeShirt(size = "Small", printmassege = "i love html") {
    console.log(`creating a ${size} shirt with the ${printmassege} prints on shirt`);
}
// calling back to function by defult value
makeshirt("Small", "i love html");
