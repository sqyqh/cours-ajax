// Permet de charger des données externes de manière asynchrone (au moment du clic) :

$(document).ready(function(){
	$("#button1").click(function(){
		$("#myDiv").load("data.txt");
	});

	$("#button2").click(function(){
		$("#myParagraph").load("load.html #loading" );
	});
});
