    for (let i = 0; i < input_file_invisible.length; i++) {

        input_file_invisible[i].addEventListener(
            "change",
            () => {
                aplica_rutas(i, input_file_invisible[i]);
            });

    }

    function aplica_rutas(indice, input_file) {
        // =======================
        console.log(this.files);
        // =======================
        let img = new Image();
        img.src = URL.createObjectURL(input_file.files[0]);
        rutas[indice] = URL.createObjectURL(input_file.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(input_file.src);

        }, false);
        secion_img[indice].src = rutas[indice];
        ficheros[indice] = input_file.files[0];
        // ===================
        console.log(rutas);
        console.log(ficheros);
        // ===================
    }