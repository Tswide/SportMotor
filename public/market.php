<?php
    session_start();
    require '../functions/auth.php';

    if(!est_connecte()){
        header('Location: ./connexion.php');
        exit();
    }

    $host  = $_SERVER['HTTP_HOST'];
    $filename = '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'product.json';  
    $contents = file_get_contents($filename);
    $liste = json_decode($contents,true);
?>

<!--===================================  HTML ===================================-->
<?php require '../html_partials/header.php' ?>

<style>
    <?php include './css/market.css' ?>
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
        <div id="filtre">
            <h2>Filtre</h2>
            <div class="filtre prix">
                <h3 class="titreFiltre">Le prix</h3>
                <div class="entrePrix">
                    <div class="champsPrix">
                        <span>Min</span>
                        <input type="number" value="0" name="prixmin" class="inputNum prixMin">
                    </div>
                    <div id="separator">-</div>
                    <div class="champsPrix">
                        <span>Max</span>
                        <input type="number" value="100000" name="prixmax" class="inputNum prixMax">
                    </div>
                </div>
            </div>
            <div class="filtre categories">
                <h3>type de consommation</h3>
                <div>
                    <form>
                        <input type="checkbox" name="carburant" value="diesel" checked>diesel <br>
                        <input type="checkbox" name="carburant" value="essence" checked>essence <br>
                        <input type="checkbox" name="carburant" value="electrique" checked>Electrique
                    </form>
                </div>
            </div>
        </div>
        <div id="product">
            <div class="filtre recherche">
                <input type="text" placeholder="Recherche" class="rechercheFilter">
            </div>
            <div class="affiche product">
                <?php foreach($liste as $product): ?>
                    <div class="card" data-categorie='<?= $product['categorie']; ?>' data-titre='<?= $product['titre']; ?>'>
                        <div class="image">
                            <img src="<?= $product['photo']; ?>" alt="tesla">
                        </div>
                        <div class="information">
                            <div>
                                <h4><?= $product['titre']; ?></h4>
                                <p class="prixProduit"><?= number_format($product['prix'],2,',', ' '); ?> €</p>
                            </div>
                            <p>C'est une voiture electrique qui a ete cree en 2021</p>
                        </div>
                        <div class="buttons">
                            <a href="addpanier.php?id=<?= $product['id']; ?>"><button class="ajouter">Ajouter au panier</button></a>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
    </section>
    <aside></aside>

    <script src="js/market.js"></script>
<?php require '../html_partials/footer.php'; ?>