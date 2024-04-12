var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// make the array in orignal order
var countriestovisit = ["china", "saudiaarebia", "sham", "iran", "iraq"];
console.log("orignal order:", countriestovisit);
// print this arrays in alphabetical order like a,b,c,d,e,f,g
console.log("alphabetical order:", __spreadArray([], countriestovisit, true).sort());
//print this array in still in orignal condition
console.log("still in orignial order:", countriestovisit);
// print this order in reverse mode without modifing it
console.log("reverse order:", __spreadArray([], countriestovisit, true).reverse());
// show that array in still in orignal array
console.log("still in orignial order:", countriestovisit);
// show this array in orignal order in reverse mode now
console.log("orignal array reversed:", __spreadArray([], countriestovisit, true).reverse());
//we have changed that orignal array in reverse again
console.log("back to orignal order:", __spreadArray([], countriestovisit, true).reverse());
//print this array that show in alphabetical order again
console.log("sorted in alpabetical order:", __spreadArray([], countriestovisit, true).sort());
// we have changed again in reverse order this array
console.log("orignal array reversed again:", __spreadArray([], countriestovisit, true).reverse());
