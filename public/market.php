<?php
    session_start();
    require '../functions/auth.php';

    if(!est_connecte()){
        header('Location: ./connexion.php');
        exit();
    }
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
                    <a href="../../index.html"><li>Accueil</li></a>
                    <a href="./market.html"><li>Produit</li></a>
                    <a href="#"><li>Contact</li></a>
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
                        <input type="checkbox" name="carburant" value="essence" checked>essence <br>
                        <input type="checkbox" name="carburant" value="diesel" checked>diesel <br>
                        <input type="checkbox" name="carburant" value="electrique" checked>Electrique
                    </form>
                </div>
            </div>
            <button id="filtrage">Filtrage</button>
        </div>
        <div id="product">
            <div class="filtre recherche">
                <input type="text" placeholder="Recherche">
            </div>
            <div class="affiche product">
                
            </div>
        </div>
    </section>
    <script src="js/market.js"></script>

<?php require '../html_partials/footer.php'; ?>