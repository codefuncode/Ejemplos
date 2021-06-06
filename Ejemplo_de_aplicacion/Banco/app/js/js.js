function navegacion(argument) {

    let contenedores =
        document.querySelectorAll(
            ".all"
        );

    let menu_registros =
        document.querySelector(
            ".menu_registros"
        );

    let btn_registro_Clinte =
        document.querySelector(
            ".btn_registro_Clinte"
        );

    let btn_registro_Agencia =
        document.querySelector(
            ".btn_registro_Agencia"
        );

    let btn_registro_Pueblo =
        document.querySelector(
            ".btn_registro_Pueblo"
        );

    let btn_registro_Pais =
        document.querySelector(
            ".btn_registro_Pais"
        );

    for (var i = 0; i < contenedores.length; i++) {

        contenedores[i].style.display = "none";
    }

    btn_registro_Pais.addEventListener("click", function(argument) {
        for (var i = 0; i < contenedores.length; i++) {

            if (contenedores[i].classList.contains("registro_pais")) {

                contenedores[i].style.display = "block";
                //  Llamada al afuncion ubucada en el fichero reguistro_pais.js
                registro_pais();
            } else {
                contenedores[i].style.display = "none";
            }

        }
    });

    btn_registro_Pueblo.addEventListener("click", function(argument) {
        for (var i = 0; i < contenedores.length; i++) {

            if (contenedores[i].classList.contains("registro_pueblo")) {

                contenedores[i].style.display = "block";
                //  Llamada al afuncion ubucada en el fichero reguistro_pais.js
                registro_pueblo();
            } else {
                contenedores[i].style.display = "none";
            }

        }
    });
}

navegacion();