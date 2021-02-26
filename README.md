# AJAX : *Asynchronous JavaScript And XML*
*Par Sayah El Yatim ([@sqyqh](https://github.com/sqyqh "[Git](https://git-scm.com/)Hub - Sayah El Yatim")) sous licence [CC-by 4.0](LICENSE.md)*

![Ajax, héro d'autrefois](assets/ajax.jpg "Ajax, héro des temps jadis")

- **Objectifs :** Mettre en place un chargement asynchrone des données à l'aide de [jQuery](https://jquery.com/).
- **Prérequis :** Savoir analyser et rédiger. Être capable de rechercher une information sur internet, [lire une documentation](https://en.wikipedia.org/wiki/RTFM) et la comprendre.
- **Public :** Débutants avec des notions de JavaScript, [jQuery](https://jquery.com/) et [Git](https://git-scm.com/).

## Introduction
Ajax (*Asynchronous JavaScript And XML*, soit Javascript et XML asynchrones) n'est pas un langage de programmation mais plutôt une approche, une méthode, qui utilise un ensemble de technologies web. Une fois combinées ensemble avec une approche Ajax au sein d'une application, l'application pourra émettre des requêtes serveurs et **mettre à jour l'interface utilisateur rapidement sans forcer le rechargement de toute une page**.

Ajax peut tout aussi bien fonctionner avec du json, du yaml etc...

Une première chose à **comprendre** une requête Ajax fonctionne comme n'importe quelle requête à l'exception près qu'elle ne nécessite pas un rechargement de la page entière.

Par exemple, au lieu d'envoyer une requête POST avec un formulaire, on peut à la place se servir d'Ajax pour envoyer le formulaire sans avoir à naviguer sur une autre page.

## Pour commencer
### Installation du dépôt
Pour cloner le dépôt du cours (celui-ci même) nous utilisons la commande :

```shell
git clone https://github.com/sqyqh/cours-ajax
```

Pour mettre à jour votre dossier, vous pouvez directement *pull* (tirer) les sources du dépôt d'origine vers votre copie locale avec la commande :

```shell
git pull
```

**Attention :** lancez la commande depuis le dossier de votre copie locale.


## Les requêtes HTTP GET et POST
### La méthode *ajax()*
Les méthodes [jQuery](https://jquery.com/) *ajax()*, *get()* et *post()* sont utilisées pour demander des données du serveur avec une requête HTTP GET ou POST.

- **GET** - requête de données depuis une ressource spécifiée
- **POST** - envoi de données pour traitement depuis une ressource spécifiée


Exemple de requête Ajax de type GET utilisant la méthode *ajax()* ([documentation](https://api.jquery.com/jquery.ajax/)):

```JavaScript
$.ajax({
	type: "GET",
	url: 'test.php',
	data: {prenom: 'Philippe', nom: 'ROBERT', age: 38},
	success: function(data){
		alert(data);
	}
});
```

Dans ce code, il y a quatre paramètres/options :
- **type :** c'est le type de la requête http qu'on souhaite envoyer. Dans notre exemple, on envoie donc une requête de type GET. Pour envoyer une requête POST, il faut simplement le 'GET' en 'POST'.
- **url :** c'est l'URL à laquelle on envoie notre requête Ajax. Dans notre exemple, c'est "test.php". Vous pouvez changer cela par "autreTest.php" ou dans un dossier "monDossier/monAutreTest.php" ou n'importe quelle autre fichier php qui traitera la requête. Ne surtout pas oublier que cette adresse est relative à l'adresse page dans laquelle l'utilisateur se trouve.
- **data** est un objet JavaScript qui contient les données qui seront envoyées avec notre requête. Dans notre exemple, nous envoyons avec notre requête une chaîne de caractères qui va s'ajouter à la chaîne la requête comme suit : **test.php?prenom=Philippe&nom=ROBERT&age=38**
- **success :** c'est la fonction qui est appelée une fois que la requête est réussie. Cette fonction a pour paramètre *data* qui contient ce qui est retourné par *test.php*. Si par exemple, *test.php* imprime la chaîne de caractères "Super !", alors la variable *data* contiendra la chaîne "Super !".

Exemple de requête POST simple avec la méthode *ajax()* :

```JavaScript
$.ajax({
	type: "POST",
	url: 'envoi.php',
	data: {prenom: 'Gérard', nom: 'NOAS', age: 55},
	success: function(data){
		alert("Super ! L'inscription des données suivantes est réalisée : " + data);
	}
});
```

Dans *envoi.php* on a par exemple:

```PHP
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$age = $_POST['age'];
```

Comme on le constate, **ces variables sont accessibles de la même manière qu'avec des requêtes GET ou POST habituelles**.

On peut modifier la fonction **success** pour notamment afficher un message à l'intérieur de la page concernée. En bref, modifier l'UI (*User Interface* soit l'Interface Utilisateur) pour que l'utilisateur ait une forte impression de réactivité et qu'il puisse lire le message lui indiquant la validation de sa demande.

La réponse reçue est d'un type donnée (*dataType*) qui doit être spécifié pour le traitement. Même si Ajax peut deviner ce type (*Intelligent Guess*), il vaut mieux éviter tout implicit pour limiter les cas d'erreurs. Les types peuvent être par exemple : *xml*, *json*, *script*, ou *html*.

On a donc, dans l'ordre :
- Ajax qui fait un requête GET ou POST au serveur
- Une réponse du serveur vers Ajax
- Un traitement de la réponse par Ajax
Le tout, de manière asynchrone et sans nécessiter de rechargement de page

### Les méthodes *get()* et *post()*
En plus de la méthode *ajax()* il existe aussi les méthodes *get()* et *post()* qui permettent la même chose mais avec une syntaxe plus concise. Si on reprend les exemples précédents on aura donc, pour les mêmes requêtes :

Avec la méthode *get()* :
```JavaScript
$.get("test.php",
	{
			prenom: 'Philippe',
			nom: 'ROBERT',
			age: 38		
	},
	function(response, status){
		alert("Data: " + response + "\nStatus: " + status)
	}
)
```

Avec la méthode *post()* :
```JavaScript
$.post("envoi.php",
	{
			prenom: 'Gérard',
			nom: 'NOAS',
			age: 55		
	},
	function(response, status){
		alert("Data: " + response + "\nStatus: " + status)
	}
)
```


### La méthode load()
La méthode *load()* permet de charger du contenu externe. Elle nécessite jusqu'à 3 paramètres : URL, data et callback.

- **URL** spécifie l'adresse du contenu,
- **data** (paramètre optionnel) spécifie un jeu de couples clés/valeurs à envoyer avec la requête,
- **callback** (paramètre optionnel) spécifie le nom de la fonction qui sera exécutée une fois que la méthode load() est complète.


## Connexion aux API REST








---

## *Sources*
- [jQuery Ajax documentation](https://api.jquery.com/category/ajax/), *jQuery.com*
- [HTTP Methods](https://www.w3schools.com/tags/ref_httpmethods.asp), *W3Schools*
- [JSON, JavaScript Object Notation](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation), *Wikipédia FR*
- [Learn jQuery Center : Ajax](https://learn.jquery.com/ajax/), *jQuery.com*
- [Liste des codes HTTP](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP), *Wikpédia FR*
- [Submitting Ajax form with jQuery](https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery), *Digital Ocean*














```JavaScript
<html>
    <head>
        <script type="text/javascript" src="jquery/jquery.js"></script>
    </head>
    <body>
        <form>
            <input type="text" placeholder="Votre recherche..." name="search" />
        </form>
        <ul id="results">
        </ul>
        <script>
            $('[name="search"]').on('input', function(){
                $.ajax({
                    url:'https://api.github.com/search/repositories',
                    type: 'get',
                    dataType: 'json',
                    data: 'q='+encodeURI($(this).val())
                }).success(function(data){
                    $('#results').html('');
                    var items = data.items;
                    items.forEach(function(el){
                        $('#results').append($('<li>').text(el.full_name));
                    });
                });
            });
        </script>
    </body>
</html>
