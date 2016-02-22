//create the array
names = new Array();
var i = 0;

//Loop and prompt for names
do  {
	next = window.prompt("Enter the next name", "");
	if (next > " "){
		names[i] = next;
		i = i + 1;
	}
}
while (next > " ");

document.write("<h2>" + (names.length) +  " names entered </2>");

//display all the names
document.write("<ol>");
for(i in names){
	document.write("</li>" + names[i] + "</li> <br />");
}
document.write("</ol>");