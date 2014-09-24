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

// Does this string follow a phone number pattern?
function myPhone(){
	var phoneString = [7,0,6,5,5,5,1,1,1,1];
	for (i = 0; i < 10; i++){
		if (phoneString.length > 10){
			console.log("Enter 10 digits please.");
		} else {
		console.log("This looks like a phone number to me!");
		} 
	}
}
myPhone();

// Find the smallest value in an array that is greater than a given number.
function findNum(){
	var randomNum = [22,33,44,55,66,77];
	for (i = 0; i < randomNum.length; i++){
		if ((randomNum[i] > 22) && (randomNum[i] < 44)){
			console.log("I found it! " + randomNum[i] + " is the next smallest number, after " + randomNum[0]);
		}
	}
}
findNum();

// Title-case a string (split into words, then uppercase the first letter of each word.)
function firstLetterCaps(){
	var capitalizeMe = "can you please capitalize me."
	var caps = capitalizeMe[0].toUpperCase() + capitalizeMe.substring(1,4) + 	capitalizeMe[4].toUpperCase() + capitalizeMe.substring(5, 8) + 			capitalizeMe[8].toUpperCase() + capitalizeMe.substring(9, 15) + capitalizeMe[15].toUpperCase() + capitalizeMe.substring(16, 26) + capitalizeMe[26].toUpperCase() + capitalizeMe.substring(27, 29);
console.log(caps);
}
firstLetterCaps();
