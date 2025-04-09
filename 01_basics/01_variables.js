const accountId=144553
let accountEmail="student@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

let accountState; // just initialized the variable without a value then it will give output as undefined 
// accountId=2  // not allowed 


accountEmail="st@gmail.com"
accountPassword="65555"
accountCity="Bengulure"
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState);
