const accountId = 14453
let accountEmail = "shubh@google.com"
var accountPassword = "12345"
accountCity = "UP"

// accountId = 2 // not alowed 

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])

