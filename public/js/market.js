$(document).ready(function(){
    //panier
    let panier = [];
    $('#cart').hide();

    // Verirification du carburant
    $("input:checkbox").on("click", () => {
        CarburantFilter();
    });
    
    // Verification des filtre categorie
    $(".rechercheFilter").on("keyup", () => {
        RechercheFilter();
    });

    $(".prixMax").on("change", function() {
        let prixMax = $(this).val(); // Récupérer la valeur du prix maximum
        filtrerParPrixMax(prixMax); // Filtrer les produits en fonction du prix maximum
    });
    
    $(".prixMin").on("change", function() {
        let prixMin = $(this).val(); // Récupérer la valeur du prix minimum
        filtrerParPrixMin(prixMin); // Filtrer les produits en fonction du prix minimum
    });
    
    $('.cart').on('click', () => {
        if($('#cart')) {
            $('#cart').toggle();
        } 
    })

    //import des produit.json
    $.post("../api/api.php",{"action": "liste"},function(data){
        r = JSON.parse(data);
        $.each(r,function(k,product){
            $(".product").append(`
                <div class="card" data-id='${product.id}' data-categorie='${product.categorie}' data-titre='${product.titre}' data-prix='${product.prix}'>
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
                        <button class="ajouter" data-id='${product.id}'>Ajouter au panier</button>
                    </div>
                </div>
            `);
        });

        // Ajouter au panier
        $('.product .card').on("click", ".ajouter", (event) => {
            let id = $(event.target).closest('.card').data('id');
            let titre = $(event.target).closest('.card').data('titre');
            let prix = $(event.target).closest('.card').data('prix');
            
            // Vérifier si le produit est déjà dans le panier
            let produitExiste = false;
            for (let i = 0; i < panier.length; i++) {
                if (panier[i].id === id) {
                    produitExiste = true;
                    break;
                }
            }
            
            // Si le produit n'est pas encore dans le panier, l'ajouter
            if (!produitExiste) {
                panier.push({
                    id: id,
                    titre: titre,
                    prix: prix,
                    quantite: 1
                });
            }
            
            // Mettre à jour l'affichage du panier
            afficherPanier();
            $('#cart').show();
        });
    });
    
    // function qui verifie si le carburant est similaire a la card
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

    // Fonction pour filtrer les éléments par prix maximum
    function filtrerParPrixMax(prixMax) {
        $(".card").hide(); // Masquer tous les produits
        $(".card").filter(function() {
            return $(this).data("prix") <= prixMax; // Retourner true si le prix est inférieur ou égal au prix maximum
        }).show(); // Afficher les produits qui correspondent à la condition
    }

    // Fonction pour filtrer les éléments par prix minimum
    function filtrerParPrixMin(prixMin) {
        $(".card").hide(); // Masquer tous les produits
        $(".card").filter(function() {
            return $(this).data("prix") >= prixMin; // Retourner true si le prix est supérieur ou égal au prix minimum
        }).show(); // Afficher les produits qui correspondent à la condition
    }

    // function qui verifie si la categorie est similaire au card
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

    function afficherPanier() {
        // Vider la liste des produits du panier
        $("#liste-panier").empty();
      
        // Boucler à travers les produits du panier et les ajouter à la liste
        let total = 0;
        for (let i = 0; i < panier.length; i++) {
          let produit = panier[i];
          let sousTotal = produit.prix * produit.quantite;
          total += sousTotal;
            $("#liste-panier").append(`
                <div class="produit-panier" data-id="${produit.id}">
                    <p>${produit.titre}</p>
                    <div class="incrementation-qt">
                        <button class="button-qt" id="decrementation">-</button>
                        <p id="quantite">${produit.quantite}</p>
                        <button class="button-qt" id="incrementation">+</button>
                    </div>
                    <p>${sousTotal}€</p>
                </div>
            `);

            // Bouton event click
            $(".produit-panier").on("click", "#decrementation", (event) => {
                let id = $(event.target).closest('.produit-panier').data('id');
                for (let i = 0; i < panier.length; i++) {
                    if (produit.id === id) {
                        if (produit.quantite > 1) {
                            produit.quantite--;
                        } else {
                            panier.splice(i, 1);
                        }
                        break;
                    }
                }
                afficherPanier();
            });

            $(".produit-panier").on("click", "#incrementation", (event) => {
                let id = $(event.target).parents('.produit-panier').data('id');
                for (let i = 0; i < panier.length; i++) {
                    if (produit.id === id) {
                        produit.quantite++;
                        break;
                    }
                }
                afficherPanier();
            });
        }
      
        // Mettre à jour le total du panier
        $("#total").text(`Total: ${total}€`);

        if (panier.length == 0) {
            // Si le panier est vide, masquer le bouton
            $("#button-footer-info").hide();
        } else {
            $("#button-footer-info").show();
            $("#button-footer-info").on("click", function() {
                $.post("../api/api.php", {'action':'liste'} ,function(data){
                    r = JSON.parse(data);
                    let error = false;
                    $.each(r,function(k,product){
                        for (let i = 0; i < panier.length; i++) {
                            if (panier[i].id === product.id && panier[i].quantite > product.qt) {
                                error = true;
                                $("#error-message").html(`La quantité commandée pour ${product.titre} est supérieure à la quantité en stock (${product.qt}).`);
                                break;
                            }
                        }
                    });
                    if (!error) {
                        setCookie("panier", JSON.stringify(panier), 365);

                        //nettoyage lors de l'envoie
                        total = 0;
                        $('#cart').hide();
                        $("#error-message").html(``);
                        $("#liste-panier").empty();
                        $("#total").text(`Total: ${total}€`);
                    }
                });
            })
        }
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
          let date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
});