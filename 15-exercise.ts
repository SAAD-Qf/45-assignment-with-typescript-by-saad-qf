let guestlist = ["Husnain","nehal","laraib","hunain"];

let Dontcome = "Husnain";

console.log(Dontcome, "main nhi aa skta.");

guestlist.splice(0 , 1 ,"Saad");

guestlist.forEach(guest => console.log(`Salam ${guest} would you like to dinner with me?`));
