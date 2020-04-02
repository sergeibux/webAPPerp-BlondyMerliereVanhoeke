

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
    
    
    interTitle.textContent = inters[i].title;
        
 

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
	$("#mainTable").hide(100);
	$("#title").click(function(){
		$("#mainTable").toggle("slow");
		 getJSONContent();
	});
});


