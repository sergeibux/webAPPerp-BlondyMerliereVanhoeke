$(document).ready(function(){
	$("#addInter").click(function(){
		window.open('add.html');
	});
	$("#valid").click(function (){
		var location = window.location.pathname;
		var fileTab = location.split("/");
		var file = fileTab[fileTab.length - 1];
		
		if (file == "add.html"){
			addAnIntervention();
		}
		
	});
});

function addAnIntervention(){
	var inters = JSON.parse('{}');
	inters.id = Math.ceil(Math.random() * 9999999999);
	inters.title = $("#inputTitle").val();
	inters.date = $("#inputDate").val();
	inters.ticketAuthor = $("#inputTicketAuthor").val();
	inters.ticketOperator = $("#inputTicketOp").val();
	inters.description = $("#inputDescr").val();
	inters.openingDate = $("#inputOpenDate").val();
	inters.closingDate = $("#inputCloseDate").val();
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
//			document.location.replace('index.html');
		}
	};
	xmlhttp.open("GET", "ajaxPHP/add.php?inters=" + JSON.stringify(inters), true);
	xmlhttp.send();

}