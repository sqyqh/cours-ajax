# AJAX : *Asynchonous JavaScript And XML*
*Par Sayah El Yatim ([@sqyqh](https://github.com/sqyqh "GitHub - Sayah El Yatim")) sous licence [CC-by 4.0](LICENSE.md)*

![Ajax, héro des temps jadis](assets/ajax.jpg "Ajax, héro des temps jadis")

- **Objectifs :** Mettre en place un chargement asynchrone des données.
- **Prérequis :** Savoir analyser et rédiger.
- **Public :** Débutants avec des notions de JavaScript, jQuery et Git.

## Introduction
AJAX (*Asynchonous JavaScript And XML*) n'est pas un langage de programmation mais plutôt une approche, une méthode, qui utilise un ensemble de technologies web. Une fois combinées ensemble avec une approche AJAX au sein d'une application, l'application pourra émettre des requêtes serveurs et mettre à jour l'interface utilisateurs rapidement sans forcer le rechargement de toute une page.

Ajax peut tout aussi bien fonctionner avec du json, du yaml etc...
bla bla bla

## Pour commencer
Pour cloner le dépôt du cours (celui-ci même) nous utilisons la commande :

```shell
git clone https://github.com/sqyqh/cours-ajax
```

Pour mettre à jour votre dossier, vous pouvez directement *pull* (tirer) les sources du dépôt d'origine vers votre copie locale avec la commande :

```shell
git pull
```
**Attention :** lancez la commande depuis le dossier de votre copie locale.



---

## *Sources*
[jQuery Ajax documentation](https://api.jquery.com/category/ajax/)














<!-- ```JavaScript
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
``` -->
