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

