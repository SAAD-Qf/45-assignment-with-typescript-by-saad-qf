var users_name = ["nehal", "lariab", "samar abbas", "admin", "hunain"];
users_name = []; // to clear or empty your array.use this method.
// usign length logic to check the length of array, to check the equaltity so we use ===.
if (users_name.length === 0) {
    console.log("we need to find some users your array is empty!");
}
else {
    // usign a for each method to loop a array
    users_name.forEach(function (oneuser) {
        // that user one is variable , usign if and else condition to seprate both parts.
        if (oneuser === "admin") {
            // to call back variable so use doller sign,and usign a back ticks in this statements.
            console.log("hello ".concat(oneuser, " would you to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, " thankyou for login again"));
        }
    });
}
