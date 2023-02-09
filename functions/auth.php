<?php

function est_connecte (): bool
{
    return !empty($_SESSION['id']);
}