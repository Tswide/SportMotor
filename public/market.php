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
                    <i class="uil uil-shopping-cart-alt cart"></i>
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
                        <input type="number" value="0" name="prixmin" class="inputNum prixMin filter">
                    </div>
                    <div id="separator">-</div>
                    <div class="champsPrix">
                        <span>Max</span>
                        <input type="number" value="100000" name="prixmax" class="inputNum prixMax filter">
                    </div>
                </div>
            </div>
            <div class="filtre categories">
                <h3>type de consommation</h3>
                <div>
                    <form>
                        <input class="filter" type="checkbox" name="carburant" value="diesel" checked>diesel <br>
                        <input class="filter" type="checkbox" name="carburant" value="essence" checked>essence <br>
                        <input class="filter" type="checkbox" name="carburant" value="electrique" checked>Electrique
                    </form>
                </div>
            </div>
        </div>
        <div id="product">
            <div class="filtre recherche">
                <input type="text" placeholder="Recherche" class="rechercheFilter filter">
            </div>
            <div class="affiche product">
            </div>
        </div>
    </section>
    <div id="cart">
        <h2>Cart</h2>
        <div id="liste-panier">
           
        </div>
        <div class="footer-cart">
            <p id="total">Total: 0.00€</p>
            <button id='button-footer-info'>Commander</button>
        </div>
        <div id="error-message"></div>
    </div>

    <script src="js/market.js"></script>
<?php require '../html_partials/footer.php'; ?>