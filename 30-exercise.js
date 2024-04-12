var usersName = ["nehal", "lariab", "samar abbas", "admin", "hunain"];
// usign a for each method to loop a array
usersName.forEach(function (oneuser) {
    // that user one is variable , usign if and else condition to seprate both parts.
    if (oneuser === "admin") {
        // to call back variable so use doller sign,and usign a back ticks in this statements.
        console.log("hello ".concat(oneuser, " would you to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, " thankyou for login again"));
    }
});
