


$(document).ready(function(){
	$("#mainTable").hide();
	$("#mainTable").show(500);
	$("#title").click(function(){
		$("#mainTable").toggle("slow");
	});
	getJSONContent();
});


