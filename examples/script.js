// Permet de charger des données externes de manière asynchrone (au moment du clic).

$(document).ready(function(){
	$("button").click(function(){
		$("#myDiv").load("data.txt");
	});
});
