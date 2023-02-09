$(document).ready(function(){
    $.post('data/product.json', function(data) {
        $.each(data, function(k,product) {
            $(".product").append(`
                <div class="card">
                    <div class="image">
                        <img src="${product.photo}" alt="tesla">
                    </div>
                    <div class="information">
                        <div>
                            <h4>${product.titre}</h4>
                            <p>${product.prix}</p>
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
});