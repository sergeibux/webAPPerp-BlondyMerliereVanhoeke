$(document).ready(function(){
	$("#edit").click(function(){
		window.open($(this).attr('href'));
	});
	$("#edit").click(function(){
		$("#editTable").toggle("slow");
		});
});