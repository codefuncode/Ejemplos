function prueba(argument) {
    //  Nombramos las variables del programa 

    // ------------------------------------------------------
    // Estas variables apuntan al el botón oculto para seleccionar 
    // todas las imágenes de manera simultanea y a un elemento o que desplegaría
    // información para pruebas del programa, en estos momentos no 
    // se usara este elemento  pero esta definido para mostrar un mensaje al usuario ;
    let btn_imagenes = document.getElementById("imagenes");
    let display = document.getElementById("display");
    // ------------------------------------------------------

    // Estas variables son las cuatro imágenes ocultas que 
    // realmente conminen la imagen por separado en cada elemento
    // de esta forma poder agregar funcionalidad de eliminar y agregar 

    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let imagen4 = document.getElementById("imagen4");
    // -------------------------------------------------------

    // --------------------------------------------------
    // Seleccionamos todas las elementos img para aplicar url 
    // de fondo la imagen de personalización 
    let bg_imagen = document.querySelectorAll("img");
    // --------------------------------------------------

    // Sección donde nombramos las variables  para los botones 
    // de eliminación e incorporación de nueva imagen
    let add1 = document.getElementById("add1");
    let remove1 = document.getElementById("remove1");

    let add2 = document.getElementById("add2");
    let remove2 = document.getElementById("remove2");

    let add3 = document.getElementById("add3");
    let remove3 = document.getElementById("remove3");

    let add4 = document.getElementById("add4");
    let remove4 = document.getElementById("remove4");

    // -------------------------------------------------------
    //  SEccion donde nombramos las variables de los elementos encargados 
    // de seleccionar todas las imágenes  y otro para el botón de agregar 
    // Múltiples, sin embargo interactúa con el botón oculto  que es quien 
    // real menta optime los datos delas imágenes, osea este botón solo 
    // activara el evento del input file oculto . 
    let secion_img = document.querySelectorAll(".img_display");
    let agregar_multiple = document.getElementById("agregar_multiple");
    // ------------------------------------------------------------------

    // --------------------
    //  Variables matriz  para almacenar rutas  e información de las imágenes 
    let rutas = [];
    let ficheros = [];
    // --------------------

    // --------------------------------------
    //  Constantes definen la cantidad de elementos máximos que el usuario puede seccionar. 
    const img_cantidad = 4;
    const url_fondo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freecreatives.com%2Fwp-content%2Fuploads%2F2016%2F02%2FPolished-Grey-Wood-Background.jpg&f=1&nofb=1";
    // --------------------------------------

    //  Rellenamos las variables matriz para agregar un valor inicial estas
    for (let i = 0; i < img_cantidad; i++) {
        rutas.push(url_fondo);
        ficheros.push("");
    }
    //  Recorremos todas las imágenes y la aplicamos un 
    // fondo predeterminado
    for (let i = 0; i < bg_imagen.length; i++) {
        bg_imagen[i].src = url_fondo;
    }

    //  Desplegamos la variable matriz rutas  para visualizar su contenido en los indices 
    //  Esta instrucción es solo para pruebas internas 
    // ===================
    console.log(rutas);
    // ===================

    //  Agregamos evento al botón "agregar_multiple" que activara el evento del input flie "btn_imagenes"
    agregar_multiple.addEventListener("click", function(argument) {
        btn_imagenes.click();

    });

    //  Agregamos un evento change al elemento input file  que sera activado por el botón agregar_multiple
    //  Entonces cuando este elemento detecte un cambio osea nuevos elementos de imágenes  pues se activara 
    btn_imagenes.addEventListener("change", function() {
        // =======================
        //  Desplegamos el consola la cantidad de imágenes que selecciono el usuario

        console.log(this.files.length);
        //  recorremos todos los ficheros de imágenes que contiene  y los agregamos 
        // a la matriz de control de ficheros  lo cual declaramos al principio del programa 
        for (let i = 0; i < this.files.length; i++) {
            ficheros[i] = this.files[i];
        }
        //  desplegamos el valor de la variable nariz ficheros  y observamos 
        // sus indices en consolas para pruebas internas 
        console.log(ficheros);
        // =======================

        //  Verificamos  si el usuario agrego o cambio de opinión al no agregar
        // ninguna imagen  haciendo click en el botón de cancelar en la ventana 
        // emergente de su sistema operativo. ya que si el usuario canela la longitud de 
        // los ficheros sera  true  y negamos la expresión para que no ocurra nada si no hay elementos   
        if (!this.files.length) {

        } else {
            // De tener tener elementos dentro de la matriz entonces  procederá a evaluar 
            // si tiene mas de los permitidos  si es así enviamos mensaje al usuario 
            if (this.files.length > img_cantidad) {
                // de ingresar  aquí el programa  demostrara al usuario un mensaje que indica  el numero 
                // máximo de imágenes que puede seleccionar y alguna otra información importante 
                // que necesitemos mostrar a usuario 

                console.log("No puedes agregar mas de " + img_cantidad + " imagenes ");
                alert("No puedes agregar mas de " + img_cantidad + " imagenes ");
                display.innerHTML = "No puedes agregar más de " +
                    img_cantidad + " imágenes y has seleccionado " +
                    this.files.length + " imágenes";

                // =================
            } else {

                //  Si la cantidad de elementos permitidos  es correcta entonces 
                // ejecutara las siguientes instrucciones 

                //  Creamos una variable matriz  que contendrá temporalmente los elementos 
                let img_element = [];

                // Recorremos nuevamente todos los ficheros seleccionados 
                // y breamos un objeto imagen  y lo agregamos a esta matriz temporal
                for (let i = 0; i < this.files.length; i++) {
                    // Agregamos un nuevo objeto imagen a cada indice 
                    // correspondiente  y un tamaño de 75 x 75 píxeles a cada elemento 
                    img_element[i] = new Image();

                    img_element[i].width = 75;
                    img_element[i].height = 75;

                }
                //  Reiniciamos  el elemento  "display" y la variable matriz rutas 

                display.innerHTML = "";
                rutas = [];

                for (let i = 0; i < this.files.length; i++) {
                    // --------------------------------------------------------------
                    // Definición del método estático  createObjectURL

                    // El método estático URL.createObjectURL () crea un DOMString que 
                    // contiene una URL que representa el objeto dado en el parámetro. 
                    // La duración de la URL está vinculada al documento en la ventana 
                    // en la que se creó. La URL del nuevo objeto representa el objeto 
                    // File o el objeto Blob especificado.

                    // Referencia 
                    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
                    // --------------------------------------------------------------

                    // Para liberar la URL de un objeto, llame a revokeObjectURL ().

                    //  Gracias a la definición  anterior del método usado aquí ya 
                    // sabemos que debemos agregar lo que de vuelve el mismo a 
                    // la url de la imagen que necesitamos que se convierta en vista previa
                    //  sin embargo vemos como la agregamos a la matriz temporera "img_element" 
                    // y a la matriz llamada "rutas "lo cual reiniciamos antes de entrar en esta 
                    // sección de instrucciones 
                    img_element[i].src = URL.createObjectURL(this.files[i]);
                    rutas.push(URL.createObjectURL(this.files[i]));

                    //  Luego revocamos para liberar esta acción y  poder continuar 
                    img_element[i].addEventListener("load", function() {

                        // ------------------------------------------------------------------------------------------
                        // Definición  del método estático revokeObjectURL

                        // El método estático URL.revokeObjectURL () libera una URL de objeto 
                        // existente que se creó previamente llamando a URL.createObjectURL (). 
                        // Llame a este método cuando haya terminado de usar la URL de un objeto 
                        // para que el navegador sepa que no debe mantener la referencia al 
                        // archivo por más tiempo.

                        // Nota: esta función está disponible en Web Workers

                        // Nota: Este método no está disponible para los trabajadores del servicio 
                        // debido a problemas con el ciclo de vida de la interfaz de Blob y la posibilidad de fugas.
                        // ------------------------------------------------------------------------------------------

                        // Dada la definición debemos almacenar en variables diferentes dado que 
                        // la liberación hace que se puede reutilizar  pero al liberarla ejecutara 
                        // una nueva ,liberando la anterior, lo que nos fuerza a guardar los datos 
                        // devueltos en variables y en este caso usamos matrices para hacerlo 

                        URL.revokeObjectURL(this.src);
                        // Este segundo parámetro deberá estar en falso para evitar conflictos por cada llamada 
                        // para mas información sobre el método "addEventListener" visite la siguiente url
                        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
                    }, false);

                }

                // Mostramos en consola todas las rutas almacenadas  
                // como parte de nuestras  pruebas internas, de 
                // echo podemos utilizar el depurador  
                // pero bueno en este caso la consola 
                // ================
                console.log(rutas);
                // ================

                // for (let i = 0; i < secion_img.length; i++) {
                //     secion_img[i].src = url_fondo;
                // }

                // Aplicamos todas las url recuperadas a las cajas en orden 
                // cronológico , por lo que recorremos la matriz rutas y 
                // aplicamos a seccion_img de turno 
                for (let i = 0; i < rutas.length; i++) {

                    secion_img[i].src = rutas[i];
                }

            }

        }

        // Reiniciamos  el elemento input oculto por si le usuario 
        // vuelve a repetir la acción ya esta  elemento no tenga 
        // nada almacenado  y no se sumen a los ya existentes 
        btn_imagenes.value = "";

    }, false);

    // ===============================================================================
    //  Declaración de evento para agregar imágenes  por separado 
    // ============================================================
    // --------------------------------------
    //  Opción #1 ,la que mas me gusta :)
    // --------------------------------------

    // Declaramos una variable   que  contenga todos los 
    // elementos que simularan un botón a la acción 

    let input_file_invisible = document.querySelectorAll(".input_file_invisible");
    let btn_add = document.querySelectorAll(".add");

    // recorremos todos los elementos  y le agregamos el evento  y funciona todos 
    for (let i = 0; i < btn_add.length; i++) {
        btn_add[i].addEventListener("click", function(argument) {

            // Estructura condicional que 
            // determina la acción de acuerdo 
            // al elemento que activa le evento

            // Compactado
            // for (let i = 0; i < btn_add.length; i++) {
            //     if (this == btn_add[i]) {
            //         input_file_invisible[i].click();
            //     }
            // }

            input_file_invisible[i].click();

            // if (this == btn_add[0]) {

            //     imagen1.click();

            // } else if (this == btn_add[1]) {

            //     imagen2.click();

            // } else if (this == btn_add[2]) {

            //     imagen3.click();

            // } else if (this == btn_add[3]) {

            //     imagen4.click();
            // }
            // console.log(this);
        });
    }

    // ========================================================
    // --------------------------------------------------------
    //  Opción #2 
    //  Se agregan los eventos por separado y su acción 
    // --------------------------------------------------------

    // add1.addEventListener("click", function(argument) {

    //     imagen1.click();

    // }, false);

    // add2.addEventListener("click", function(argument) {

    //     imagen2.click();

    // }, false);

    // add3.addEventListener("click", function(argument) {

    //     imagen3.click();

    // }, false);

    // add4.addEventListener("click", function(argument) {

    //     imagen4.click();

    // }, false);
    // ================================================
    // ===============================================================================

    for (let i = 0; i < input_file_invisible.length; i++) {

        // input_file_invisible[i].addEventListener("change", function(argument) {

        //     // for (let i = 0; i < input_file_invisible.length; i++) {

        //     //     if (this == input_file_invisible[i]) {
        //     //         aplica_rutas(i, input_file_invisible[i]);
        //     //     }
        //     // }

        //     aplica_rutas(i, input_file_invisible[i]);
        // });

        input_file_invisible[i].addEventListener(
            "change",
            () => {
                aplica_rutas(i, input_file_invisible[i]);
            });

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
    }

    // imagen1.addEventListener("change", function() {

    //     // =======================
    //     console.log(this.files);
    //     // =======================
    //     let img = new Image();
    //     img.src = URL.createObjectURL(this.files[0]);
    //     rutas[0] = URL.createObjectURL(this.files[0]);
    //     img.width = 75;
    //     img.height = 75;

    //     img.addEventListener("load", function() {
    //         URL.revokeObjectURL(this.src);

    //     }, false);
    //     secion_img[0].src = rutas[0];
    //     ficheros[0] = this.files[0];
    //     // ===================
    //     console.log(rutas);
    //     console.log(ficheros);
    //     // ===================

    // }, false);

    // imagen2.addEventListener("change", function() {

    //     // ====================
    //     console.log(this.files);
    //     // ====================
    //     let img = new Image();
    //     img.src = URL.createObjectURL(this.files[0]);
    //     rutas[1] = URL.createObjectURL(this.files[0]);
    //     img.width = 75;
    //     img.height = 75;

    //     img.addEventListener("load", function() {
    //         URL.revokeObjectURL(this.src);

    //     }, false);
    //     secion_img[1].src = rutas[1];
    //     ficheros[1] = this.files[0];
    //     // ===================
    //     console.log(rutas);
    //     console.log(ficheros);
    //     // ===================

    // }, false);

    // imagen3.addEventListener("change", function() {

    //     // =====================
    //     console.log(this.files);
    //     // =====================
    //     let img = new Image();
    //     img.src = URL.createObjectURL(this.files[0]);
    //     rutas[2] = URL.createObjectURL(this.files[0]);
    //     img.width = 75;
    //     img.height = 75;

    //     img.addEventListener("load", function() {
    //         URL.revokeObjectURL(this.src);

    //     }, false);
    //     secion_img[2].src = rutas[2];
    //     ficheros[2] = this.files[0];
    //     // ================
    //     console.log(rutas);
    //     console.log(ficheros);
    //     // ================

    // }, false);

    // imagen4.addEventListener("change", function() {

    //     // =====================
    //     console.log(this.files);
    //     // =====================
    //     let img = new Image();
    //     img.src = URL.createObjectURL(this.files[0]);
    //     rutas[3] = URL.createObjectURL(this.files[0]);
    //     img.width = 75;
    //     img.height = 75;

    //     img.addEventListener("load", function() {
    //         URL.revokeObjectURL(this.src);

    //     }, false);
    //     secion_img[3].src = rutas[3];
    //     ficheros[3] = this.files[0];
    //     // ================
    //     console.log(rutas);
    //     console.log(ficheros);
    //     // ================

    // }, false);

    // ================================================
    let btn_remove = document.querySelectorAll(".remove");

    for (let i = 0; i < btn_remove.length; i++) {

        btn_remove[i].addEventListener("click", function(argument) {

            if (this == btn_remove[0]) {

                elimina_imagen(0, rutas);

            } else if (this == btn_remove[1]) {

                elimina_imagen(1, rutas);

            } else if (this == btn_remove[2]) {

                elimina_imagen(2, rutas);

            } else if (this == btn_remove[3]) {

                elimina_imagen(3, rutas);
            }

            // console.log(this);
        });
    }

    function elimina_imagen(indice, rutas) {

        rutas[indice] = url_fondo;
        secion_img[indice].src = rutas[indice];
        ficheros[indice] = "";
        console.log(rutas);
        console.log(ficheros);
    }

    document.getElementById("enviar").addEventListener("click", function(argument) {
        alert("Botón deshabilitado por el momento");
    });

}