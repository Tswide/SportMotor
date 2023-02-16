<?php require '../html_partials/header.php';

    $host  = $_SERVER['HTTP_HOST'];
    $filename = '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'product.json';  
    $contents = file_get_contents($filename);
    $liste = json_decode($contents,true);

?>
<style>
     <?php include './css/panier.css' ?>
</style>
    <header>
        <nav>
            <h1>SportMotor</h1>
            <div class="grp1">
                <ul class="navigation">
                    <a href="index.php"><li>Accueil</li></a>
                    <a href="market.php"><li>Produit</li></a>
                    <a href="panier.php"><i class="uil uil-shopping-cart-alt"></i></a>
                </ul>
                <div>
                    <i class="uil uil-user"></i>
                </div>
            </div>
        </nav>
    </header>
    <section>
        <div class="banniere">
            <h1>Panier</h1>
            <button>Proceder au payement</button>
        </div>
        <?php
        $ids = array__keys($_SESSION['panier']);
        foreach($liste as $product): 
        ?>
            <div class="cards">
            <div class="card_produit">
            <img src="<?= $product['photo']; ?>" alt="photo_produit">
                <p class="prix"><?= number_format($product['prix'],2,',', ' '); ?> €</p>
                <div class="quantiters">
                    <button id="decrementation">-</button>
                    <p class="quantiter">1</p>
                    <button id="incrementation">+</button>
                </div>
                <p class="total"><?= number_format($product['prix'],2,',', ' '); ?> €</p>
            </div>
            <div class="action">
                <i class="uil uil-trash"></i>
            </div>
        </div>
        <?php endforeach ?>
    </section>