<?php

//  Condicional  que detecta  si la variable existe o esta vacía
if (isset($_POST['nombre_pais']) && $_POST["nombre_pais"] != "") {
    //  El valor de la variable global a una variable
    // regular pata manejar el dato.
    $pais = $_POST['nombre_pais'];
    // Se incluyen los datos de conexión a la base de
    include_once "../coneccion/coneccion.php";

    try {

        $conn =
        new PDO(
            "mysql:host=$servername;dbname=$dbname",
            $username,
            $password);

        $conn->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION);
        //  Consulta para seleccionar el dato  que vamos a insertar y determinar si existe o no  para tomar una decisión.
        $stmt_seleccion = $conn->prepare(
            "SELECT * FROM pais
            WHERE nombre_pais= :nombre_pais"
        );

        $stmt_seleccion->bindParam(
            ':nombre_pais',
            $pais,
            PDO::PARAM_STR
        );
        //  Ejecución de la primera consulta
        $stmt_seleccion->execute();
        $count = $stmt_seleccion->rowCount();
        //  Solo si es igual a cero lo insertara
        if ($count == 0) {
            //  Creamos el cursor de la conexión anterior
            $stmt_seleccion->closeCursor();

            //  Todo lo demás es para insertar.
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
            //  En caso de que no sea 0 la respuesta
            // envía respuesta negativa al usuario
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
