var currentUsers = ["nehal", "laraib", "samar", "hunain", "adil"];
var new_users = ["saad", "nehal", "laraib", "wassem", "arbaz"];
// loop through the new users avaibality
new_users.forEach(function (new_one_user) {
    //this some logic to compare both variables,and lower case logic to use case sensitive.
    var ourCondition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (ourCondition) {
        // to call variable we use back ticks and ${}.
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
