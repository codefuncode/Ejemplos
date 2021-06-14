 <?php

if (isset($_POST['func']) && $_POST["func"] == "todo") {
    try {
        include_once "../coneccion/coneccion.php";
        $conn =
        new PDO(
            "mysql:host=$servername;dbname=$dbname",
            $username,
            $password);

        $conn->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare(
            "SELECT * FROM pais"
        );
        $stmt->execute();

        $count = $stmt->rowCount();
        //  Solo si es igual a cero lo insertara
        if ($count > 0) {

            $datos = $stmt->fetchAll();

            $respuesta = array(
                "respuesta" => "si",
                "datos"     => $datos);

            echo json_encode($respuesta);

        } else {
            $respuesta = array(
                "respuesta" => "no",
            );

            echo json_encode($respuesta);
        }
    } catch (PDOException $e) {

    }
    $conn = null;
}

?>