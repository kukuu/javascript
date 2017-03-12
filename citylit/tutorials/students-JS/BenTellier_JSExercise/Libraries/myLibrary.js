// Create an alert on load
// alert("This is my first JavaScript programme");
// console.log("This is my \"first\" JavaScript programme");

// Create an alert on load with the message as a variable
// var msg = "This is my first JS variable";
// alert(msg);

// Create an alert on load that return the type of a serie of variables
// var 
// 	a=true, //this is a boolean
// 	b=2017, //this is a number
// 	c="Hello world"; //this is a string

// alert(typeof a + "\n" + typeof b + "\n" + typeof c);

// Create an alert with a text with escaped characters
// alert("I \"like\" JS");

// Slice an array: extract part of an array
function exNineteen(){
	var cities=["New York", "Paris", "London", "Tokyo"];
	var nonEurope = cities.slice(1, 3);
	var x=document.getElementById("demo");
	x.innerHTML=nonEurope;
}