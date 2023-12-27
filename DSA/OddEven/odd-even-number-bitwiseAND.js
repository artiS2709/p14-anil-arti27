// take input from the user
const number = prompt("Enter a number");
//const number =5;
// check odd number using bitwise AND operator
const result = ((number&1)==0)? "even" : "odd";
console.log(`The number is ${result}`);