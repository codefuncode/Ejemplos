<?php

if (isset($_POST["nombre_pueblo"]) &&
   $_POST['nombre_pueblo'] != "" &&
   isset($_POST['id_pais']) &&
   $_POST['id_pais'] != "" &&
   $_POST['id_pais'] != "inicial") {

   $nombre_pueblo = $_POST['nombre_pueblo'];
   $id_pais       = $_POST['id_pais'];
   $id_pais       = (int) $id_pais;

   try {
      // include_once '../coneccion/coneccion.php';

      include_once "../conexion/conexion.php";
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $stmt_seleccion = $conn->prepare(
         "SELECT * FROM pueblo
         WHERE nombre_pueblo= :nombre_pueblo
         AND id_pais = :id_pais
         GROUP BY :id_pais"
      );
      $stmt_seleccion->bindParam(':nombre_pueblo', $nombre_pueblo);
      $stmt_seleccion->bindParam(':id_pais', $id_pais);

      if ($stmt_seleccion->execute()) {

         $filas_afectadas = count($stmt_seleccion->fetchAll());

         if ($filas_afectadas == 0) {

            $stmt_seleccion->closeCursor();

            $stmt_insercion = $conn->prepare(
               "INSERT INTO pueblo
               (id_pais, nombre_pueblo)
               VALUES
               (:id_pais, :nombre_pueblo);"
            );
            $stmt_insercion->bindParam(
               ':nombre_pueblo',
               $nombre_pueblo,
               PDO::PARAM_STR
            );
            $stmt_insercion->bindParam(
               ':id_pais',
               $id_pais,
               PDO::PARAM_INT
            );

            $stmt_insercion->execute();
            $respuesta = array(
               "respuesta" => "si",
            );
            echo json_encode($respuesta);
         }

         $respuesta = array(
            "respuesta" => "existe",
         );
         echo json_encode($respuesta);

      }

   } catch (PDOException $e) {
      $respuesta = array(
         "respuesta"  => "error",
         "tipo_error" => "interno",
         "error"      => $e->getMessage(),
      );
      echo json_encode($respuesta);
   }
   $conn = null;

} else {

   $respuesta = array(
      "respuesta"  => "error",
      "tipo_error" => "datos",
   );
   echo json_encode($respuesta);
}
