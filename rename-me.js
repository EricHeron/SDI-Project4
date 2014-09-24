// Eric Heron
// SDI Term: 1409
// Section: 02
// Project 4


// Format a number to use a specific number of decimal places, as for money:
function myDecimal(){
	var num = 2.1;
	var n = num.toFixed(2);
	console.log(n);
}
myDecimal();

// Given a string version of a number such as "42", return the value as an actual number, such as 42.
function myParse(){
var parseNumber = "42";
var sum = parseInt(parseNumber) + 42;
console.log(sum);
}
myParse();

// Does this string follow an email pattern?
function myEmail(){
var myString = "706-555-5555";
if (myString == "jondoe@fullsail.edu"){
	console.log("This is an email address");
} else {
	console.log("This is not an email address!");
}
}
myEmail();