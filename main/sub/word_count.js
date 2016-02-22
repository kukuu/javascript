"use strict";
	
	function countIt() {
			
		var formContent = document.wordcount.editor.value;
		var content = formContent.split(" ");
		document.wordcount.txtCount.value = content.length;
		
	}
	
