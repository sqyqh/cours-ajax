# AJAX : *Asynchonous JavaScript And XML*
*Par Sayah El Yatim ([@sqyqh](https://github.com/sqyqh "GitHub - Sayah El Yatim")) sous licence [CC-by 4.0](LICENSE.md)*

![Ajax, héro des temps jadis](assets/ajax.jpg "Ajax, héro des temps jadis")

- **Objectifs :** Mettre en place un chargement asynchrone des données.
- **Prérequis :** Savoir analyser et rédiger.
- **Public :** Débutants avec des notions de JavaScript et jQuery.

## Introduction
AJAX (*Asynchonous JavaScript And XML*) n'est pas un langage de programmation mais plutôt une approche, une méthode, qui utilise un ensemble de technologies web. Une fois combinées ensemble avec une approche AJAX au sein d'une application, l'application pourra émettre des requêtes serveurs et mettre à jour l'interface utilisateurs rapidement sans forcer le rechargement de toute une page.

Ajax peut tout aussi bien fonctionner avec du json, du yaml etc...

## Pour commencer

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
