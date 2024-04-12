// printing a magician name in arrays,and making a function

function show_magicain(magician:string[]){

    magician.forEach(name => console.log(name));

}

// making the great function
function make_Great(magician:string[]){

   return magician.map(name => `The Great ${name}`);

}

// making a array 

let magician_names = ["harry poter","amil bangali","pandit"];

// printing the names through variable

  let great_Names = make_Great(magician_names);

// print

console.log(great_Names);