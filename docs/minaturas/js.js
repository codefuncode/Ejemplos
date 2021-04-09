function prueba(argument) {

    let imagenes = document.getElementById("imagenes");
    let display = document.getElementById("display");

    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let imagen4 = document.getElementById("imagen4");

    let add1 = document.getElementById("add1");
    let remove1 = document.getElementById("remove1");

    let add2 = document.getElementById("add2");
    let remove2 = document.getElementById("remove2");

    let add3 = document.getElementById("add3");
    let remove3 = document.getElementById("remove3");

    let add4 = document.getElementById("add4");
    let remove4 = document.getElementById("remove4");

    let secion_img = document.querySelectorAll(".img_display");
    let agregar_multiple = document.getElementById("agregar_multiple");
    let img_cantidad = 4;
    let rutas = [];
    let ficheros = [];

    let url_fondo = "fondo.jpeg";

    for (var i = 0; i < 4; i++) {
        rutas.push(url_fondo);
        ficheros.push("");
    }

    // ===================
    console.log(rutas);
    // ===================
    agregar_multiple.addEventListener("click", function(argument) {
        imagenes.click();

    });

    imagenes.addEventListener("change", function() {
        // =======================
        console.log(this.files.length);
        for (var i = 0; i < this.files.length; i++) {
            ficheros[i] = this.files[i];
        }
        console.log(ficheros);
        // =======================
        if (!this.files.length) {

        } else {

            if (this.files.length > img_cantidad) {
                // =================
                console.log("No puedes agregar mas de " + img_cantidad + " imagenes ");
                // =================
            } else {

                let contenedor = [];
                let img_element = [];

                for (var i = 0; i < this.files.length; i++) {

                    img_element[i] = new Image();
                    img_element[i].width = 75;
                    img_element[i].height = 75;

                }
                display.innerHTML = "";
                rutas = [];
                for (let i = 0; i < this.files.length; i++) {

                    img_element[i].src = URL.createObjectURL(this.files[i]);
                    rutas.push(URL.createObjectURL(this.files[i]));

                    img_element[i].addEventListener("load", function() {
                        URL.revokeObjectURL(this.src);

                    }, false);

                }
                // ================
                console.log(rutas);
                // ================

                for (var i = 0; i < secion_img.length; i++) {
                    secion_img[i].src = "fondo.jpeg";
                }
                for (var i = 0; i < rutas.length; i++) {
                    secion_img[i].src = rutas[i];
                }

            }

        }

        imagenes.value = "";
    }, false);

    // ================================================
    add1.addEventListener("click", function(argument) {
        imagen1.click();

    }, false);

    imagen1.addEventListener("change", function() {
        // =======================
        console.log(this.files);
        // =======================
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[0] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[0].src = rutas[0];
        ficheros[0] = this.files[0];
        // ===================
        console.log(rutas);
        console.log(ficheros);
        // ===================
    }, false);

    // ================================================
    add2.addEventListener("click", function(argument) {
        imagen2.click();
    }, false);

    imagen2.addEventListener("change", function() {
        // ====================
        console.log(this.files);
        // ====================
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[1] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[1].src = rutas[1];
        ficheros[1] = this.files[0];
        // ===================
        console.log(rutas);
        console.log(ficheros);
        // ===================
    }, false);

    // ================================================
    add3.addEventListener("click", function(argument) {
        imagen3.click();
    }, false);

    imagen3.addEventListener("change", function() {
        // =====================
        console.log(this.files);
        // =====================
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[2] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[2].src = rutas[2];
        ficheros[2] = this.files[0];
        // ================
        console.log(rutas);
        console.log(ficheros);
        // ================
    }, false);

    // ================================================
    add4.addEventListener("click", function(argument) {
        imagen4.click();
    }, false);

    imagen4.addEventListener("change", function() {
        // =====================
        console.log(this.files);
        // =====================
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[3] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[3].src = rutas[3];
        ficheros[3] = this.files[0];
        // ================
        console.log(rutas);
        console.log(ficheros);
        // ================
    }, false);

    remove1.addEventListener("click", function(argument) {

        rutas[0] = url_fondo;
        secion_img[0].src = rutas[0];
        ficheros[0] = "";
        console.log(rutas);
        console.log(ficheros);
    }, false);

    remove2.addEventListener("click", function(argument) {
        rutas[1] = url_fondo;
        secion_img[1].src = rutas[1];
        ficheros[1] = "";
        // =================
        console.log(rutas);
        console.log(ficheros);
        // =================
    }, false);

    remove3.addEventListener("click", function(argument) {
        rutas[2] = url_fondo;
        secion_img[2].src = rutas[2];
        ficheros[2] = "";
        // ===================
        console.log(rutas);
        console.log(ficheros);
        // ===================
    }, false);

    remove4.addEventListener("click", function(argument) {
        rutas[3] = url_fondo;
        secion_img[3].src = rutas[3];
        ficheros[3] = "";
        // ===========================
        console.log(rutas);
        console.log(ficheros);
        // ===========================
    }, false);

    function enviar(argument) {

        let enviar = document.getElementById("enviar");

        enviar.addEventListener("click", function(argument) {

            console.log(rutas);

            var formData = new FormData();

            for (var i = 0; i < rutas.length; i++) {

                if (rutas[i] == url_fondo) {

                } else {

                    formData.append("imagen" + i, ficheros[i]);
                }

            }

            $.ajax({
                url: 'imagenes.php',
                type: 'POST',
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
            }).done(function() {
                console.log("success");
            }).fail(function() {
                console.log("error");
            }).always(function(resultado) {
                console.log(resultado);
            });

        });
    }
    enviar();
}