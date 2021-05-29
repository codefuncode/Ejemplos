btn_imagenes.addEventListener("change", function() {

    console.log(this.files.length);

    for (let i = 0; i < this.files.length; i++) {
        ficheros[i] = this.files[i];
    }

    console.log(ficheros);

    if (!this.files.length) {

    } else {

        if (this.files.length > img_cantidad) {

            console.log("No puedes agregar mas de " + img_cantidad + " imagenes ");
            alert("No puedes agregar mas de " + img_cantidad + " imagenes ");
            display.innerHTML = "No puedes agregar más de " +
                img_cantidad + " imágenes y has seleccionado " +
                this.files.length + " imágenes";

            // =================
        } else {

            let img_element = [];

            for (let i = 0; i < this.files.length; i++) {

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

            console.log(rutas);

            for (let i = 0; i < rutas.length; i++) {

                seccion_img[i].src = rutas[i];
            }

        }

    }

    btn_imagenes.value = "";

}, false);