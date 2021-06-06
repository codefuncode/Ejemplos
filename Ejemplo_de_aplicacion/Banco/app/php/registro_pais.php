<?php

if (isset($_POST['nombre_pais']) && $_POST["nombre_pais"] != "") {
    $pais = $_POST['nombre_pais'];
    include_once "../coneccion/coneccion.php";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt_seleccion = $conn->prepare(
            "SELECT * FROM pais
            WHERE nombre_pais= :nombre_pais"
        );

        $stmt_seleccion->bindParam(
            ':nombre_pais',
            $pais,
            PDO::PARAM_STR
        );

        $stmt_seleccion->execute();
        $count = $stmt_seleccion->rowCount();

        if ($count == 0) {
            $stmt_seleccion->closeCursor();
            $stmt_insercion =
            $conn->prepare(
                "INSERT INTO pais (nombre_pais)
                VALUES (:nombre_pais)"
            );

            $stmt_insercion->bindParam(
                ':nombre_pais',
                $pais,
                PDO::PARAM_STR
            );
            $stmt_insercion->execute();

            $respuesta = array(
                "respuesta" => "si");

            echo json_encode($respuesta);

        } else {

            $respuesta = array(
                "respuesta" => "no");

            echo json_encode($respuesta);
        }

    } catch (PDOException $e) {

        echo "Error: " . $e->getMessage();
    }
    $conn = null;

} else {

    $respuesta = array(
        "respuesta" => "error");

    echo json_encode($respuesta);

}
