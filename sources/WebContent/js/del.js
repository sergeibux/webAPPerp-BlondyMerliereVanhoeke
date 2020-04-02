$(document).ready(function(){
	$('#delete').click(function(){
		alert('' + isDel[1]);
        var pressed = $(this).attr('id');
        var isDel = pressed.split('_');
        if (isDel[0] == "del"){
//		$("#delete").parent().css("display", "none");
			window.confirm("Vous allez supprimer cette intervention.\nÊtes-vous bien certain de savoir ce que vous faites ?")
        }
	});
});