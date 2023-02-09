<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
require '../functions/json.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $result = addUser($_POST['name'], $_POST['email'], $_POST['password']);
}
?>

<?php require '../html_partials/header.php' ?>

<style>
    <?php include './css/connexion.css' ?>
</style>

<div>
    <img src="../asset/supra.jpg" alt="background_images" id="background-images">
</div>
<div id="card">
    <nav id="navigation">
        <a href="connexion.php"><button class="buttonNav" data-filter="connexion">Connexion</button></a>
        <button class="buttonNav active" data-filter="inscription">Inscription</button>
    </nav>
    <section id="pannelConnexion">
        <div id="presentation" class="pannel">
            <div class="textPresentation">
                <h2>Rejoignez le monde merveilleux de SportMotor</h2>
                <p>Ici vous trouverez la perle rare qui vous suivra tout au long de votre vie</p>
            </div>
        </div>
        
        <div class="filter inscription">
            <form method="post">
                <div>
                    <label for="name">Prenom</label> <br>
                    <input type="text" name="name" value='<?= isset($_POST['name'])? $_POST['name'] : '' ?>' required> <br> <br>
                    <label for="email" pattern=".+@globex\.com" value='<?= isset($_POST['email'])? $_POST['email'] : '' ?>'>E-mail</label> <br>
                    <input type="email" name="email" required> <br> <br>
                    <label for="password">password</label> <br>
                    <input type="password" name="password" required> <br>
                    <button class="button buttonInscription">Inscription</button>
                </div>
            </form>
        </div>
    </section>
</div>

<?php require '../html_partials/footer.php'; ?>