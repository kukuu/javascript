d3.text("ncc.csv", function(datasetText) {//text() to load

		var parsedCSV = d3.csv.parseRows(datasetText);//call to a helper function parseRows
		
		var sampleHTML = d3.select("#result")// Now construct a table and append  to the selecto
		    .append("table")
		    .style("border-collapse", "collapse")
		    .style("border", "2px black solid")
		
		    .selectAll("tr")
		    .data(parsedCSV)
		    .enter().append("tr")
		
		    .selectAll("td")
		    .data(function(d){return d;})
		    .enter().append("td")
		    .style("border", "1px black solid")
		    .style("padding", "3px")
			//add events calllback for mouseover and mouseout
		    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
		    .on("mouseout", function(){d3.select(this).style("background-color", "white")})
		    .text(function(d){return d;})//load csv
		    .style("font-size", "12px");
});