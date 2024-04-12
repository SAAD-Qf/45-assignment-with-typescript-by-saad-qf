// making a function with rest perameter that represent the multiple in diffrent arguments items of our sandwich ...

function make_sandwich(...items: string[]){

    console.log("\n making a sandwich with following items :\n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\n NOW ENJOY THE SANDWICH");

    
}

// call the function with 3 items with 3 diffrent of arguments

make_sandwich("chicken","cheese","mayo","peanet butter","egg");

make_sandwich("bread","butter","beef");

make_sandwich("beef,peanet butter","mayo","ketchup","cheese","egg");
