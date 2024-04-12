let guestlist = ["Husnain","Nehal","Laraib","HUnain"];

// maiking a variable those guset who cant come
let dontcome = "Husnain";

// print the name of those guest who cant come
console.log(dontcome, "nhi aa skte hain.");

// add or remove the guest list array
guestlist.splice(0 , 1 ,"Saad");

// massage print for bigger table
console.log("Good News ! We have find bigger table for dinner");

// add a new guest at starting index of array
guestlist.unshift("Ali");

//add a new guest at end of the array
guestlist.push("Ariba");

// making a variable to store a middle index of our guestlist array
let middleindex : number = Math.floor(guestlist.length / 2);

//add a new guest at middle of index
guestlist.splice(middleindex,0 , "Hania");

// our updated guestlist
console.log("Updated list of our guests");

// sending a invitation to our guest one by one with name
guestlist.forEach(oneguest => console.log (`Salam ${oneguest} ,would you like to dinner with me?`));

// inform that only two guests are invited for dinner
console.log("Unfortunatily! the new table wont arrive at the time so i can invite only two guests for dinner");

// using while loop to remove guests from array until two reamin
while(guestlist.length > 2){
let revomedguest = guestlist.pop();
console.log(`Sorry ${revomedguest} i cant invite you to dinner`);
}
//print initation massage to last two guests
console.log("invitation to last two guests");
guestlist.forEach(lasttwo => console.log (`luckly ${lasttwo}, you are invited two dinner`));

// removing last two guests from list
guestlist.pop();
guestlist.pop();

console.log("empty list:", guestlist);