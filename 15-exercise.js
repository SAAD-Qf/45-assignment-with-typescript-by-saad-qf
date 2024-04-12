var guestlist = ["Husnain", "nehal", "laraib", "hunain"];
var Dontcome = "Husnain";
console.log(Dontcome, "main nhi aa skta.");
guestlist.splice(0, 1, "Saad");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, " would you like to dinner with me?")); });
