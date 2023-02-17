<?php 
require '../html_partials/_header.php';
require '../functions/panier.class.php';

$host  = $_SERVER['HTTP_HOST'];
$filename = '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'product.json';  
$contents = file_get_contents($filename);
$liste = json_decode($contents,true);

if(isset($_GET['id'])){
    foreach($liste as $product){ 
        $item = array($product['id'] => $_GET['id']);
    }
    if(empty($_GET['id'])) {
        die("Ce produit n'existe pas");
    };
    $item.add($item[0] ->id);
    die("Le produit a ete rajouter a votre panier");
}else {
    die("vous n'avez pas de produit choisi");
}
?>