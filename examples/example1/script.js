// Permet de charger des données externes de manière asynchrone (au moment du clic) :

$(document).ready(function(){
	$("#button1").click(function(){
		// Ne pas hesiter à changer l'URL pour voir d'autres codes http (404, par exemple)
		$("#myDiv").load("data.txt", function(response, status, xhr){
			if (status == "success") alert("Super, ça marche ! " + xhr.status);
			if (status == "error") alert ("Erreur " +  xhr.status);
		});
	});

	$("#button2").click(function(){
		$("#myParagraph").load("load.html #loading" );
	});
});
