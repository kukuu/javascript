function addItem() {
			var listTitle = document.getElementById("addTitle");
			var newNode = document.createElement("title");
			var newTextNode = document.createTextNode("Dynamic title tag and content are dynamic");
				newNode.appendChild(newTextNode);
		        listTitle.appendChild(newNode);	
				listTitle.insertBefore(newNode,listTitle.firstChild);
			    document.getElementById("msg").innerHTML = "Welcome to Alex's homepage" ;
				document.getElementById("buttonID").onclick = function(){
					document.write("Hey I am a freeky button");
				};
		}
		window.onload=addItem;