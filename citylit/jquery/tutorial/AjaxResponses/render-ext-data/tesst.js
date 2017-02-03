$(document).on('pagebeforeshow','#home',function(){
	$.ajax(
		url:'/hghghj/',
		dataType: 'JSONP',
		async: 'true',
		error: function(request,error){
			alert("There has been a network failure");
		},
		success: function(result){
			ajax.parseJSONP(result);
		}
	)}
	var ajax = {
		parseJSONP: function(result){
			$.each(result,function(i,row){
				$("#output").append("'Result is <br /><li><a href='+row.href+'>'" +row.name+""+row.summary+"</li>");
$("#output").listview('refresh');
			})
		}
	}
)