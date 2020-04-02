$(document).ready(function(){
	$("#edit").click(function(){
		window.open('edit.html');
	});
	$("#edit").click(function(){
		$("#editTable").toggle("slow");
	});

	var location = window.location.pathname;
	var fileTab = location.split("/");
	var file = fileTab[fileTab.length - 1];
	
	
	if (file == "edit.html"){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var json = JSON.parse(this.responseText);
				var inters = json['interventions'];


				$("#inputTitle").val(inters[0].title);
				$("#inputDate").val(inters[0].date);
				$("#inputTicketAuthor").val(inters[0].ticketAuthor);
				$("#inputTicketOp").val(inters[0].ticketOperator);
				$("#inputDescr").val(inters[0].description);
				$("#inputOpenDate").val(inters[0].openingDate);
				$("#inputCloseDate").val(inters[0].closingDate);

				var sortie = inters[0].id;
				console.log(sortie)

				
				
				
			}
		};
		xmlhttp.open("GET", "datas/inter.json", true);
		xmlhttp.send();
		
		
		$("#valid").click(function(){
			window.confirm('Souhaitez-vous valider vos changements ?\n\n');
		});
		$("#cancel").click(function(){
			window.confirm('/!\\ Vous aller annuler vos changements !\n\nConfirmer ?\n\n');
		});
	}
});