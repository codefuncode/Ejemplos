
<?php

if (isset($_FILES)) {

    foreach ($_FILES as $key => $value) {

        $file = $_FILES[$key]['name']; // Nombre de la imagen
        echo $file;
        echo "<br/>";
    }
}
