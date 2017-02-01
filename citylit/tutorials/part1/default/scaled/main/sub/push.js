"use strict";
	
	var flintstones = ["Fred", "Wilma", "Pebbles", "Dino"];	
	
	function pushOne() {
			
		flintstones.push(["Barney", "Betty", "Bam Bam"]);
		var para = document.getElementById("demo");
		para.innerHTML = flintstones;
	}
	
	window.onload = pushOne;