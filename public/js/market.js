$(document).ready(function(){
    // function qui verifie si la categorie est similaire au card
    function CarburantFilter() {
        let inputVal = [];
        let dataCategorie = [];

        $("input:checkbox[name=carburant]:checked").each(function(){ 
            inputVal.push($(this).val());
        });

        $('.card').each(function() {
            let categorie = $(this).data('categorie');
            dataCategorie.push(categorie);
        });

        // Parcourir les éléments du premier tableau
        dataCategorie.forEach(function(categorie) {
            // Vérifier si l'élément se trouve dans le deuxième tableau
            if (inputVal.indexOf(categorie) === -1) {
                // Si l'élément n'est pas présent dans le deuxième tableau, cacher la div correspondante
                let div = $(".card[data-categorie='" + categorie + "']");
                div.hide();
            } else {
                let div = $(".card[data-categorie='" + categorie + "']");
                div.show();
            }
        });
    }

    function PrixFilter() {

    }

    function RechercheFilter() {
        // Sélection de l'élément input et des divs à afficher/cacher
        let input = $(".rechercheFilter");
        let card = $(".card");

        // Événement déclenché lorsque l'utilisateur modifie le contenu de l'input
        input.on("input", function() {
            // Récupération du texte de l'input
            let inputText = input.val().toLowerCase();
            
            // Utilisation de la méthode filter pour sélectionner les divs dont l'attribut data-titre contient le texte de l'input
            let filterCard = card.filter(function() {
                let dataTitre = $(this).data("titre").toLowerCase();
                return dataTitre.includes(inputText);
            });
            
            // Utilisation de la méthode toggle pour afficher les divs sélectionnées et cacher les autres
            card.not(filterCard).hide();
            filterCard.show();
        });
    }

    $.post("../api/api.php", {"action": "liste"}, function(data) {
        $(".product").html("");
        r = JSON.parse(data)
        $.each(r, function(k,product) {
            $(".product").append(`
                <div class="card" data-categorie='${product.categorie}' data-titre='${product.titre}'>
                    <div class="image">
                        <img src="${product.photo}" alt="tesla">
                    </div>
                    <div class="information">
                        <div>
                            <h4>${product.titre}</h4>
                            <p class="prixProduit">${product.prix} €</p>
                        </div>
                        <p>C'est une voiture electrique qui a ete cree en 2021</p>
                    </div>
                    <div class="buttons">
                        <button class="ajouter">Ajouter au panier</button>
                    </div>
                </div>
            `);
        });
    });

    $("input:checkbox").on("click", () => {
        CarburantFilter();
    });

    $(".inputNum").on("keyup", () => {
        PrixFilter();
    });

    $(".rechercheFilter").on("keyup", () => {
        RechercheFilter();
    });
});