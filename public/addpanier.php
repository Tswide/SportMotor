<?php 
require '../html_partials/_header.php';

if(isset($_GET['id'])){
    // $product = TOUT LES PRODUIT, array('id' => $_GET['id']);
    if(empty($_GET['id'])) {
        die("Ce produit n'existe pas");
    };
    // $panier.add($product[0] ->id)
    die("Le produit a ete rajouter a votre panier");
}else {
    die("vous n'avez pas de produit choisi");
}
?>