<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
session_start();
require '../functions/auth.php';
require '../functions/json.php';

$host  = $_SERVER['HTTP_HOST'];
$filename = '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'user.json';  
$contents = file_get_contents($filename);
$liste = json_decode($contents,true);
if(!empty($_SESSION['id'])) {
    $user = getUser((int)$_SESSION['id']);
    $name = $user['name'];
}
$error = null;

if($_SERVER['REQUEST_METHOD'] == 'POST') {  
    foreach( $liste as $user) {
        if ($user['email'] == $_POST['email'] && ($user['password'] == $_POST['password'])) {
            session_start(); //genere un cookie
            $_SESSION['id'] = $user['id'];
            header("Location: http://$host/market.php");
            // exit;
        } else {
            $error = "Mauvais mot de passe ou utilisateur inconnu";
        }
    }
}
?>

<!--===================================  HTML ===================================-->
<?php
require '../html_partials/header.php';
?>
<style>
    <?php include './css/connexion.css' ?>
</style>

<div>
    <img src="../asset/supra.jpg" alt="background_images" id="background-images">
</div>
<div id="card">
    <nav id="navigation">
        <?php if(est_connecte()): ?>
            <a href="index.php?deco=1"><button class="buttonNav active" data-filter="deconnexion">Déconnexion</button></a>
        <?php else: ?>
            <button class="buttonNav active" data-filter="connexion">Connexion</button>
            <a href="inscription.php"><button class="buttonNav" data-filter="inscription">Inscription</button></a>
        <?php endif ?>
    </nav>
    <section id="pannelConnexion">
        <div id="presentation" class="pannel">
            <div class="textPresentation">
                <h2>Rejoignez le monde merveilleux de SportMotor</h2>
                <p>Ici vous trouverez la perle rare qui vous suivra tout au long de votre vie</p>
            </div>
        </div>
        <div class="filter connexion">
        <?php if(est_connecte()): ?>
            <div>
                <p>Vous êtes déjà connecté <?= $name ?></p>
                <a href="/market.php">retour au Market</a>
            </div>
        <?php else: ?>
            <form method="post">
                <div>
                    <label for="email">E-mail</label> <br>
                    <input type="email" name='email' value='<?= isset($_POST['email'])? $_POST['email'] : '' ?>' required><br><br>
                    <label for="password">password</label> <br>
                    <input type="password" name='password' required> <br>
                    <button class="button buttonConnexion">Connexion</button>
                </div>
            </form>
        <?php endif ?>
            
            <div><?= $error ?></div>
        </div>
    </section>
</div>

<?php require '../html_partials/footer.php'; ?>