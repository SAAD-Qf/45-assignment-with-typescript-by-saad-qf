// define the variables
var pineapple = "pineapple";
var uppercase = "PINEAPPLE";
var six = 6;
var nine = 9;
var fruits = ["APPLE", "GRAPE", "BANANA", "ORANGE"];
// test :1 / equality and inequality
// equality
console.log("is pineapple equals to pineapple?");
console.log(pineapple == "pineapple");
//  inequality
console.log("\n is pineapple is not equals to pineapple?");
console.log(pineapple != "pineapple");
// test:2 / lower case function 
console.log("\n is PINEAPPLE equals to pineapple after convert to lower case?");
console.log(uppercase.toLowerCase() == "pineapple");
// test :3 false with lowercase function
console.log("\n is PINEAPPLE is not equals to pineapple after convert to lowercase?");
console.log(uppercase.toLowerCase() != "pinapple");
// test :4 numarical values
// false 
console.log("\n is six equals to nine?");
console.log(six == nine);
// true
console.log("\n is nine is not equals to six?");
console.log(nine != six);
// greater
console.log("\n is nine greater than 1?");
console.log(nine > 1);
// smaller 
console.log("\n is six smaller than nine?");
console.log(six < nine);
// greater than and equals to
console.log("\n is nine greater than and equal to 5?");
console.log(nine >= 5);
// smaller than and equals to
console.log("\n is six smaller than and equal to 10?");
console.log(six <= 10);
// usign and && or operators
// using and operator &&
// true value
console.log("\n six is not equals to 9 && 9 is greater than 6?");
console.log(six != 9 && 9 > 6);
// false value
console.log("\n six is not equals to 9 && 9 is smaller than 6?");
console.log(six != 9 && 9 < 6);
// using or operator || 
// true value
console.log("\n six is not equals to 9 OR 9 is smaller than 6?");
console.log(six != 9 || 9 < 6);
// false value
console.log("\n six is not equals to 9 && 9 is smaller than 6?");
console.log(six == 9 || 9 < 6);
// test whether an item thats inculde in my array using include method
console.log("\n is GRAPE is inculde in my friuts array?");
console.log(fruits.includes("GRAPE"));
// not inculde
console.log("\n is GRAPE not inculde in my friuts array?");
console.log(!fruits.includes("GRAPE"));
