function registro_pais(argument) {

    let btn_regustrar =
        document.querySelector(
            ".registro_pais .btn_registrar_pais"
        );

    let nombre_pais =
        document.querySelector(
            ".registro_pais [name='nombre_pais']"
        );

    nombre_pais.value = "";

    btn_regustrar.addEventListener(
        "click",
        function(argument) {

            let url =
                "php/registro_pais.php";

            let data = {
                "nombre_pais": nombre_pais.value
            };

            $.post(url, data, function(data) {

                console.log(data);

            });
        });

}