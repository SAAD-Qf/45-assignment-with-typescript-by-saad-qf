function crete_car(manufacturer,model, ...options){
    // intilize a car object with manufacturer and model

    let car = {
        manufacturer:manufacturer,
        model:model
    };

    // add options in car object
    options.forEach(options => {

        // to divide in to values so we use this method 

        let [key,value] = options.split(":")

        // this method to remove whide space so we use trim

        car[key.trim()] = [value.trim()]

    })

    // we use this method to save our function and call the function from diffrent variable
    return car;
}

// call the function

let car = crete_car ("Honda","Civic","color:Black","Sunroof:True");

// print this function to ensure that all informatian is running correctily

console.log(car);