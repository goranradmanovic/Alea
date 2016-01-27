<?php

//Ukljucivanje autoload.php fajla iz vendor foldera gdje je Twig paket
require_once '../vendor/autoload.php';

//Podesavanje putanje do foldera gdje defaultni template
$loader = new Twig_Loader_Filesystem('../layouts');

//Instanciranje Twig enviroment klase
$twig = new Twig_Environment($loader);

//Pozivanje Twig render metoda za prikazivanje template-a
echo $twig->render('default.twig');

?>