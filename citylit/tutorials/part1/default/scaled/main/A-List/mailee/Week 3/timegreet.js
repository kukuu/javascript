
	now = new Date()
	hour_of_day = now.getHours()
	minute_of_hour=now.getMinutes()
	second_of_minute=now.getSeconds()

			//Time Display
			document.write("<h2>")
			document.write(hour_of_day+":"+minute_of_hour+":"+second_of_minute)
			document.write("<h2>")

			//Greeting Display
			document.write("<p>")
			if(hour_of_day<10){
				document.write("Good morning");
			}
			else if((hour_of_day>=14)&&(hour_of_day<=17)){
				document.write("Good afternoon")
			}
			else if(hour_of_day>=17){
				document.write("Good evening")
			}
			else {
				document.write("Good day")
			}
			document.write("</p>")