function poll(){
	for (var i =0; i<document.f.round1.length; i++) {
		if(document.f.round1[i].checked){
			document.bgColor=document.f.round1[i].value;
		}
	}
}