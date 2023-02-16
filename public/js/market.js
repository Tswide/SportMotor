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


    $(".ajouter").on("click", () => {
        $(this).preventDefault();
        $.get($(this).attr('href'),{}, function(data){
            // ça bloque à partir de là
            if(data.error){
                alert(data.message);
            }else{
                //Si on clique sur le confirm
                if(confirm(data.message + '. Voulez-vous consulter votre panier ?')) {
                    location.href = 'panier.php';
                }else{
                    //$('#total').empty().append(data.total);
                    //$('#count').empty().append(data.count);
                }
            }
        },'json');
        return false;
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