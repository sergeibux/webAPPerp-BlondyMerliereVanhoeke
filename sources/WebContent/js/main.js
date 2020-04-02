

function showInters(jsonObj) {
	var section = document.getElementById('mainTable');
  var inters = jsonObj['interventions'];
      alert(inters);
  for (var i = 0; i < inters.length; i++) {
    var inter = document.createElement('div');
    inter.classList.add('inter');
    inter.id = inters[i].id;
    var interTitle = document.createElement('div');
    interTitle.classList.add('title');
    interTitle.classList.add('table');
    var buttons = document.createElement('div');
    buttons.classList.add('btn');
    
    var btEdit = document.createElement('button');
    btEdit.classList.add('btn');
    btEdit.classList.add('edit');
    btEdit.innerHTML = "Edition";
    var btEdDet = document.createElement('button');
    btEdDet.classList.add('btn');
    btEdDet.classList.add('editDet');
    btEdDet.innerHTML = "Edition détaillée";
    var btSupp = document.createElement('button');
    btSupp.classList.add('btn');
    btSupp.classList.add('delete');
    btSupp.innerHTML = "Suppression";
    
    
    interTitle.textContent = inters[i].title;
        
 
    buttons.appendChild(btEdit);
    buttons.appendChild(btEdDet);
    buttons.appendChild(btSupp);

    inter.appendChild(interTitle);
    inter.appendChild(buttons);

    section.appendChild(inter);
  }
}


function getJSONContent() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myObj = JSON.parse(this.responseText);
	    showInters(myObj);
	  }
	};
	xmlhttp.open("GET", "datas/inter.json", true);
	xmlhttp.send();
}





$(document).ready(function(){
	$("#mainTable").hide();
	$("#mainTable").show(500);
	$("#title").click(function(){
		$("#mainTable").toggle("slow");
	});
	getJSONContent();
});


