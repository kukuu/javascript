

//Get the current date
now = new Date();

//split into hours minutes and seconds. Set up global variables
hour_of_day = now.getHours();
minute_of_hour = now.getMinutes();
seconds_of_minute = now.getSeconds();


//display the time.
document.write("<h2>");
document.write(hour_of_day + ":" + minute_of_hour + ":" + seconds_of_minute);
document.write("</h2>");


//display a greeting
document.write("<p>");
if (hour_of_day < 10){
	document.write("Good morning");
}
else if ((hour_of_day >= 14) && (hour_of_day <= 17)){
	document.write("Good afternoon");
}
else if (hour_of_day >= 17){
	document.write("Good evening");
}
else {
	document.write("Good day");
}
document.write("</p>");
