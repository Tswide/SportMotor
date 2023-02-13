$(document).ready(function(){

    $.post("../api/api.php", {"action": "liste"}, function(data) {
        $(".product").html("");
        r = JSON.parse(data)
        $.each(r, function(k,product) {
            $(".product").append(`
                <div class="card" data-id="${product.id}">
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
            `)
        });
    });

    $("#filtrage").on("click", function() {
        let prixMin = $(".prixMin").val();
        let prixMax = $(".prixMax").val();
        // let id = $('.card').data("id");

        $.post("../api/api.php", {"action": "liste"}, function(data) {
            r = JSON.parse(data);

            $.each(r, function(k,product) {
                if(prixMax >= $(product.prix)) {
                    console.log(prixMax);
                    console.log(prixMin);
                    console.log(product.prix)
                } else {
                    console.log('montre ce qui reste');
                }
            });
        });
    })
});