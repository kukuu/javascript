//Author : Alexander Adu-Sarkodie
//To be used with above instruction ONLY
	
	function createTable(data) {
			var table = document.createElement("table");
			table.style.border = "1px solid #ffcc33";
			var thead = document.createElement("thead");
			thead.style.padding = "5px";
			var tr = document.createElement("tr");
			for (var i = 0; i < data[0].length; i++) {
				var th = document.createElement("th");
				th.style.border = "2px solid #ff0000";
				var newText = document.createTextNode(data[0][i]);
				th.appendChild(newText);
				tr.appendChild(th);
			}
			thead.appendChild(tr);
			table.appendChild(thead);
			
			var tbody = document.createElement("tbody");
			for (var i =1; i < data.length; i++){
				var tr = document.createElement("tr");
				for (var j = 0; j < data[i].length; j++) {
					var td = document.createElement("td");
					td.style.padding = "5px";
					td.style.border = "2px solid #00ff00";
					var newText = document.createTextNode(data[i][j]);
					td.appendChild(newText);
					tr.appendChild(td);
			}
			tbody.appendChild(tr);
			}
			table.appendChild(tbody);
			return table;	
		}
		
		window.onload = function() {
		var table = createTable ([
		["1","2","3","4"],
		["One","Two","Three","Four"],
		["Un","Deux","Trois","Quatre"],
		["eins","zwet","dret","vier"]
		]);
		
		document.body.appendChild(table)
		}