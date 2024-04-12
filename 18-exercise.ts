
// make the array in orignal order
let countriestovisit: string[] = ["china","saudiaarebia","sham","iran","iraq"];
console.log("orignal order:",countriestovisit);

// print this arrays in alphabetical order like a,b,c,d,e,f,g
console.log("alphabetical order:",[...countriestovisit].sort());

//print this array in still in orignal condition
console.log("still in orignial order:",countriestovisit);

// print this order in reverse mode without modifing it
console.log("reverse order:",[...countriestovisit].reverse());

// show that array in still in orignal array
console.log("still in orignial order:",countriestovisit);

// show this array in orignal order in reverse mode now
console.log("orignal array reversed:",[...countriestovisit].reverse());

//we have changed that orignal array in reverse again
console.log("back to orignal order:",[...countriestovisit].reverse());

//print this array that show in alphabetical order again
console.log("sorted in alpabetical order:",[...countriestovisit].sort());

// we have changed again in reverse order this array
console.log("orignal array reversed again:",[...countriestovisit].reverse());