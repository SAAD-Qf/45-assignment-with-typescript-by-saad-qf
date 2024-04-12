var guestlist = ["Husnain", "Nehal", "Laraib", "HUnain"];
// maiking a variable those guset who cant come
var dontcome = "Husnain";
// print the name of those guest who cant come
console.log(dontcome, "nhi aa skte hain.");
// add or remove the guest list array
guestlist.splice(0, 1, "Saad");
// massage print for bigger table
console.log("Good News ! We have find bigger table for dinner");
// add a new guest at starting index of array
guestlist.unshift("Ali");
//add a new guest at end of the array
guestlist.push("Ariba");
// making a variable to store a middle index of our guestlist array
var middleindex = Math.floor(guestlist.length / 2);
//add a new guest at middle of index
guestlist.splice(middleindex, 0, "Hania");
// our updated guestlist
console.log("Updated list of our guests");
// sending a invitation to our guest one by one with name
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, " ,would you like to dinner with me?")); });
