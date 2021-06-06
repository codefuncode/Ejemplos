<?php

// Columna
// apellido_cliente (varchar)
// Columna
// correo_cliente (varchar)
// Columna
// direccion (varchar)
// Columna
// edad_cliente (int)
// Columna
// fecha_nacimiento (date)
// Columna
// id_cliente (PRI, int)
// Columna
// id_pueblo (date)
// Columna
// nombre_cliente (varchar)
// Columna
// nombre_de_usuario (varchar)
// Columna
// numero_identificacion_cliente (varchar)
// Columna
// pass (varchar)
// Columna
// sexo_cliente (varchar)
// Columna
// telefono_cliente (int)

// apellido_cliente
// correo_cliente
// direccion
// edad_cliente
// fecha_nacimiento
// id_cliente
// id_pueblo
// nombre_cliente
// nombre_de_usuario
// numero_identificacion_cliente
// pass
// sexo_cliente
// telefono_cliente

if (isset($_POST['registro_clientes'])) {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "
        INSERT INTO cliente
        (
			apellido_cliente,
			correo_cliente,
			direccion,
			edad_cliente,
			fecha_nacimiento,
			id_cliente,
			id_pueblo,
			nombre_cliente,
			nombre_de_usuario,
			numero_identificacion_cliente,
			pass , sexo_cliente,
			telefono_cliente
        )
		VALUES
		(
			:apellido_cliente,
			:correo_cliente,
			:direccion,
			:edad_cliente,
			:fecha_nacimiento,
			:id_cliente,
			:id_pueblo,
			:nombre_cliente,
			:nombre_de_usuario,
			:numero_identificacion_cliente,
			:pass , sexo_cliente,
			:telefono_cliente
		)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':firstname', $firstname);
        $stmt->bindParam(':lastname', $lastname);
        $stmt->bindParam(':email', $email);

        // insert a row
        $firstname = "John";
        $lastname  = "Doe";
        $email     = "john@example.com";
        $stmt->execute();
        // use exec() because no results are returned
        $conn->exec($sql);
        // echo "New record created successfully";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;

}
