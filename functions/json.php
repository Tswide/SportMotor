<?php

function getJson()
{
    $filename = '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'user.json';
    return $filename;
}

function getUsers()
{
    $filename = getJson();
    $contents = file_get_contents($filename);
    $liste = json_decode($contents,true);

    return $liste;
}

function getUser(int $id)
{
    $filename = getJson();
    $contents = file_get_contents($filename);
    $liste = json_decode($contents,true);

    foreach($liste as $user) {
        if($user['id'] == $id) {
            return $user;
        } else {
            return null;
        }
    }
}

function addUser(string $name, string $email, string $password)
{
    $liste = getUsers();
    $last_id = 1;
    foreach($liste as $k => $u) {
        if($last_id <= $u["id"]) $last_id = $u["id"]+1;
    }

    $nouveau = array(
        "id" => $last_id,
        "name" => $name,
        "email" => $email,
        "password" => $password
    );

    $liste[] = $nouveau;
    file_put_contents(getJson() ,json_encode($liste));

    // echo json_encode(array("success" => "L'utilisateur ".$last_id." a bien été ajouté"), true);
    return array("success", "L'utilisateur ".$last_id." a bien été ajouté");
}
