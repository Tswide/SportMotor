<?php
    require '../html_partials/_header.php';

    error_reporting(E_ERROR | E_WARNING | E_PARSE);
    session_start();
    if(isset($_GET['deco'])) {
        session_destroy();
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SportMotor</title>

    <link rel="stylesheet" href="./css/all.css">
    <link rel="stylesheet" href="./css/index.css">
    <!--link rel="stylesheet" href="./css/connexion.css"-->
    <!--link rel="stylesheet" href="./css/market.css"-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
   
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="https://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
</head>
<body>