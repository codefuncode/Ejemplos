function prueba1(argument) {
    let width, height;
    width = 300;
    height = 300;

    let htmlImageElement =
        new Image(width, height);

    let btn_imagen =
        document.getElementById("btn_imagen");

    btn_imagen.addEventListener("change",
        function(argument) {
            console.log(this.files);

            const cuadro =
                document.createElement("div");

            img.src =
                URL.createObjectURL(this.files[i]);

            console.log(img.src);
            img.height = 60;
            img.onload =
                function() {
                    URL.revokeObjectURL(this.src);
                }

            for (let i = 0; i <
                this.files.length; i++) {
                const li =
                    document.createElement("li");
                list.appendChild(li);

                const img =
                    document.createElement("img");

                img.src =
                    URL.createObjectURL(this.files[i]);

                console.log(img.src);
                img.height = 60;
                img.onload =
                    function() {
                        URL.revokeObjectURL(this.src);
                    }
                li.appendChild(img);
                const info =
                    document.createElement("span");
                info.innerHTML =
                    this.files[i].name + ": " +
                    this.files[i].size + " bytes";
                li.appendChild(info);
            }
        });
}

function prueba2(argument) {

    let lightboxElem =
        document.querySelector("#lightbox");

    let lightboxImgElem =
        lightboxElem.querySelector("img");

    let lightboxControlsElem =
        lightboxElem.querySelector(".toolbar");

    async function loadImage(url, elem) {
        return new Promise((resolve, reject) => {
            elem.onload = () => resolve(elem);
            elem.onerror = reject;
            elem.src = url;
        });
    }

    async function lightBox(url) {
        lightboxElem.style.display = "block";

        await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
        lightboxControlsElem.disabled = false;
    }

    /* ... */

    function fixRedEyeCommand() {

        if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
            fixRedEye(lightboxImgElem);
        } else {
            /* can't start doing this until the image is fully loaded */
        }
    }

}

function prueba3(argument) {

    let fileInput = document.getElementById("btn_imagen");
    let minaturas = document.querySelectorAll(".minaturas canvas");
    let myImage = [];
    let img = [];
    fileInput.addEventListener("change", function(argument) {

        let fotos = this.files;
        console.log(this.files.length);

        if (this.files.length <= 4) {
            for (var i = 0; i < this.files.length; i++) {
                myImage.push(new Image(50, 50));
                img.push(document.createElement("img"));
                img[i].src = URL.createObjectURL(this.files[i]);

            }

            // for (var i = 0; i < img.length; i++) {
            //     img[i].addEventListener("load", function() {
            //         console.log(this);
            //     });
            // }
            console.log(minaturas);
            console.log(myImage);
            console.log(img);
        } else {
            console.log("No puedes agrega rmas de 4 fotos");
        }

    });

    // function insertaurl(imagen, file) {
    //     imagen.src = URL.createObjectURL(file);

    //     imagen.onload = function() {
    //         URL.revokeObjectURL(file.src);
    //     }
    // }
    // var myImage = new Image();
    // console.log(myImage);
    // myImage.src = '1500x500.jpeg';
    // document.body.appendChild(myImage);

    // // files is a FileList object (similar to NodeList)
    // let files = fileInput.files;
    // let file;

    // // loop through files
    // for (var i = 0; i < files.length; i++) {

    //     // get item
    //     file = files.item(i);
    //     //or
    //     file = files[i];

    //     console.log(file.name);
    // }

}

function prueba4(argument) {
    const fileSelect = document.getElementById("fileSelect"),
        fileElem = document.getElementById("fileElem"),
        fileList = document.getElementById("fileList");

    fileSelect.addEventListener("click", function(e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);

    fileElem.addEventListener("change", handleFiles, false);

    function handleFiles() {
        if (!this.files.length) {
            fileList.innerHTML = "<p>No files selected!</p>";
        } else {
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            for (let i = 0; i < this.files.length; i++) {
                const li = document.createElement("li");
                list.appendChild(li);

                const img = document.createElement("img");
                img.src = URL.createObjectURL(this.files[i]);
                img.height = 60;
                img.onload = function() {
                    URL.revokeObjectURL(this.src);
                }
                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
                li.appendChild(info);
            }
        }
    }
}

function prueba5(argument) {
    const fileInput = document.querySelector('input[type="file"]');
    const preview = document.querySelector('img.preview');
    const eventLog = document.querySelector('.event-log-contents');
    const reader = new FileReader();

    function handleEvent(event) {
        eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

        if (event.type === "load") {
            preview.src = reader.result;
        }
    }

    // function addListeners(reader) {
    //     reader.addEventListener('loadstart', handleEvent);
    //     reader.addEventListener('load', handleEvent);
    //     reader.addEventListener('loadend', handleEvent);
    //     reader.addEventListener('progress', handleEvent);
    //     reader.addEventListener('error', handleEvent);
    //     reader.addEventListener('abort', handleEvent);
    // }

    function handleSelected(e) {
        eventLog.textContent = '';
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            addListeners(reader);
            reader.readAsDataURL(selectedFile);
        }
    }

    fileInput.addEventListener('change', handleSelected);

}

function prueba6(argument) {
    let fileInput = document.querySelector('input[type="file"]');
    let preview = document.querySelectorALL('.vista_previa');

    const reader = new FileReader();
    fileInput.addEventListener('change', function(argument) {

        for (var i = 0; i < fileInput.files.length; i++) {

            reader.readAsDataURL(fileInput.files[i]);
        }

        reader.addEventListener('loadend', function(argument) {
            preview.src = this.result;
        });
    });

}

function prueba7(argument) {
    const fileSelect = document.getElementById("fileSelect"),
        fileElem = document.getElementById("fileElem"),
        fileList = document.getElementById("fileList");

    fileSelect.addEventListener("click", function(e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);

    fileElem.addEventListener("change", handleFiles, false);

    function handleFiles() {
        if (!this.files.length) {
            fileList.innerHTML = "<p>No files selected!</p>";
        } else {
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            for (let i = 0; i < this.files.length; i++) {
                const li = document.createElement("li");
                list.appendChild(li);

                const img = document.createElement("img");
                img.src = URL.createObjectURL(this.files[i]);
                img.height = 60;
                img.onload = function() {
                    URL.revokeObjectURL(this.src);
                }
                li.appendChild(img);
                const info = document.createElement("span");
                info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
                li.appendChild(info);
            }
        }
    }

}

function prueba8(argument) {

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
    let url_fondo = "fondo.jpeg";
    for (var i = 0; i < 4; i++) {
        rutas.push(url_fondo);
    }
    console.log(rutas);
    agregar_multiple.addEventListener("click", function(argument) {
        imagenes.click();

    });

    imagenes.addEventListener("change", function() {
        console.log(this.files.length);
        if (!this.files.length) {
            // fileList.innerHTML = "<p>No files selected!</p>";
        } else {

            if (this.files.length > img_cantidad) {
                console.log("No puedes agregar mas de " + img_cantidad + " imagenes ")
            } else {

                let contenedor = [];
                let img_element = [];

                for (var i = 0; i < this.files.length; i++) {
                    // contenedor.push(document.createElement("div"));
                    // img_element.push(document.createElement("img"));
                    img_element[i] = new Image();
                    // contenedor[i].style.display = "inline-block";
                    // contenedor[i].style.padding = "5px";
                    // contenedor[i].appendChild(img_element[i]);

                }
                display.innerHTML = "";
                rutas = [];
                for (let i = 0; i < this.files.length; i++) {

                    img_element[i].src = URL.createObjectURL(this.files[i]);
                    rutas.push(URL.createObjectURL(this.files[i]));
                    img_element[i].width = 75;
                    img_element[i].height = 75;

                    img_element[i].addEventListener("load", function() {
                        URL.revokeObjectURL(this.src);

                    }, false);

                    // rutas[i].addEventListener("load", function() {
                    //     URL.revokeObjectURL(this.src);

                    // }, false);

                }
                console.log(rutas);
                // for (var i = 0; i < contenedor.length; i++) {
                //     // display.appendChild(contenedor[i]);
                // }

                for (var i = 0; i < secion_img.length; i++) {
                    secion_img[i].src = "fondo.jpeg";
                }
                for (var i = 0; i < rutas.length; i++) {
                    secion_img[i].src = rutas[i];
                }
                // image1.value = imagenes.files[0].value;
                // image2.value = imagenes.files[1].value;
                // image3.value = imagenes.files[2].value;
                // image4.value = imagenes.files[3].value;
                // console.log(image1.files[0]);
                // console.log(image2.files[0]);
                // console.log(image3.files[0]);
                // console.log(image4.files[0]);

            }

        }

        imagenes.value = "";
    }, false);

    // ================================================
    add1.addEventListener("click", function(argument) {
        imagen1.click();

    }, false);

    imagen1.addEventListener("change", function() {
        console.log(this.files);
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[0] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[0].src = rutas[0];
        console.log(rutas);
    }, false);

    // ================================================
    add2.addEventListener("click", function(argument) {
        imagen2.click();
    }, false);

    imagen2.addEventListener("change", function() {
        console.log(this.files);
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[1] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[1].src = rutas[1];
        console.log(rutas);
    }, false);

    // ================================================
    add3.addEventListener("click", function(argument) {
        imagen3.click();
    }, false);

    imagen3.addEventListener("change", function() {
        console.log(this.files);
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[2] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[2].src = rutas[2];
        console.log(rutas);
    }, false);

    // ================================================
    add4.addEventListener("click", function(argument) {
        imagen4.click();
    }, false);

    imagen4.addEventListener("change", function() {
        console.log(this.files);
        let img = new Image();
        img.src = URL.createObjectURL(this.files[0]);
        rutas[3] = URL.createObjectURL(this.files[0]);
        img.width = 75;
        img.height = 75;

        img.addEventListener("load", function() {
            URL.revokeObjectURL(this.src);

        }, false);
        secion_img[3].src = rutas[3];
        console.log(rutas);
    }, false);

    remove1.addEventListener("click", function(argument) {

        rutas[0] = url_fondo;
        secion_img[0].src = rutas[0];
        console.log(rutas);
    }, false);

    remove2.addEventListener("click", function(argument) {
        rutas[1] = url_fondo;
        secion_img[1].src = rutas[1];
        console.log(rutas);
    }, false);

    remove3.addEventListener("click", function(argument) {
        rutas[2] = url_fondo;
        secion_img[2].src = rutas[2];
        console.log(rutas);
    }, false);

    remove4.addEventListener("click", function(argument) {
        rutas[3] = url_fondo;
        secion_img[3].src = rutas[3];
        console.log(rutas);
    }, false);

}