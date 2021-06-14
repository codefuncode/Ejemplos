
CREATE TABLE cliente(
    id_cliente INT NOT NULL AUTO_INCREMENT,
    nombre_cliente VARCHAR(10) NOT NULL, 
    nombre_de_usuario VARCHAR(10) NOT NULL,
    pass VARCHAR(10) NOT NULL, 
    apellido_cliente VARCHAR(10) NOT NULL,
    telefono_cliente INT(9) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_pueblo INT NOT NULL,
    id_pais INT NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    edad_cliente INT(2) NOT NULL,
    sexo_cliente VARCHAR(10) NOT NULL,
    numero_identificacion_cliente VARCHAR(20) NOT NULL,
    correo_cliente VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_cliente)
    );


CREATE TABLE depositos(
    id_deposito INT NOT NULL AUTO_INCREMENT,
    id_agencia INT NOT NULL,
    id_cliente INT NOT NULL,
    cantidad DECIMAL(15,2) NOT NULL,
    fecha DATE NOT NULL,
    PRIMARY KEY (id_deposito)
    );

CREATE TABLE agegencia(
    id_agencia INT NOT NULL AUTO_INCREMENT,
    nombre_agencia VARCHAR(40) NOT NULL,
    descripcion_agencia VARCHAR(40) NOT NULL,
    id_pueblo INT NOT NULL,
    PRIMARY KEY (id_agencia)
    );



CREATE TABLE pueblo(
    id_pueblo INT NOT NULL AUTO_INCREMENT,
    nombre_pueblo VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_pueblo)
    );

CREATE TABLE pais(
    id_pais INT NOT NULL AUTO_INCREMENT,
    nombre_pais VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_pais)
    );

CREATE TABLE inicio_sesion(
    id_inicio_sesion INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    fecha_inicio_sesion INT NOT NULL,
    PRIMARY KEY (id_inicio_sesion)
    );

CREATE TABLE registro_clinete(
    id_registro_clinete INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    tipo_registro_clinete VARCHAR(10) NOT NULL,
    fecha_registro_clinete INT NOT NULL,
    PRIMARY KEY (id_registro_clinete)
    );

CREATE TABLE targeta_debito(
    id_targeta_debito INT NOT NULL AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    codigo_targeta VARCHAR(10) NOT NULL,
    id_estado_targeta INT NOT NULL,
    estado_targeta VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_targeta_debito)
    );

CREATE TABLE estado_targeta(
    id_estado_targeta INT NOT NULL AUTO_INCREMENT,
    estado_targeta VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_estado_targeta)
    );





-- CREATE TABLE tipo_transacuion(
--     id_tipo_transacuion
--     pago INT NOT NULL,
--     depopsito VARCHAR() NOT NULL,
--     transferencia DATE NOT NULL;


