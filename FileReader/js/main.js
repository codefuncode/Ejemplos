    function imagenes(argument) {
        // let imagen = document.getElementById("imagen");
        // let test = document.getElementById("test");
        // let vistaprevia = document.getElementById('vistaprevia');
        // test.addEventListener("click", function(argument) {
        //     console.log(imagen);
        //     console.log(imagen.files.length);

        // });

        let inputElement = document.getElementById("imagen");
        inputElement.addEventListener("change", handleFiles, false);

        function handleFiles() {
            let fileList = this.files;
            console.log(fileList);
            fileList = [];
            console.log(fileList);
            fileList = this.files;
            console.log(fileList);

            for (var i = 0; i < fileList.length; i++) {
                console.log(fileList[i]['name']);
                console.log(fileList[i]['size']);
                console.log(fileList[i]['type']);

            }

            const reader = new FileReader();

            reader.addEventListener("load", function() {
                // convert image file to base64 string
                let vistaprevia = document.getElementById("vistaprevia");
                let imagen = document.createElement("IMG");
                imagen.style.width = "100px";
                imagen.style.height = "100px";

                imagen.src = reader.result;
                vistaprevia.appendChild(imagen);
                console.log(reader.result);
            }, false);

            if (fileList[0]) {
                reader.readAsDataURL(fileList[0]);
            }

        }
    }

    function imagenes2(argument) {
        // let imagen = document.getElementById("imagen");
        // let test = document.getElementById("test");
        // let vistaprevia = document.getElementById('vistaprevia');
        // test.addEventListener("click", function(argument) {
        //     console.log(imagen);
        //     console.log(imagen.files.length);

        // });

        let inputElement = document.getElementById("imagen");
        inputElement.addEventListener("change", handleFiles, false);

        function handleFiles() {
            let fileList = this.files;
            console.log(fileList);
            fileList = [];
            console.log(fileList);
            fileList = this.files;
            console.log(fileList);

            for (var i = 0; i < fileList.length; i++) {
                console.log(fileList[i]['name']);
                console.log(fileList[i]['size']);
                console.log(fileList[i]['type']);

            }

            const reader = new FileReader();

            reader.addEventListener("load", function() {
                // convert image file to base64 string
                let vistaprevia = document.getElementById("vistaprevia");
                let imagen = document.createElement("IMG");
                imagen.style.width = "100px";
                imagen.style.height = "100px";

                imagen.src = reader.result;
                vistaprevia.appendChild(imagen);
                console.log(reader.result);
            }, false);
            // -----------------------------------------
            for (var i = 0; i < fileList.length; i++) {

                if (fileList[i]) {
                    reader.readAsDataURL(fileList[i]);
                }
            }
            // Uncaught DOMException: An attempt was made to use an object that is not, or is no longer, usable 
            // -----------------------------------------

        }
    }
    // imagenes();
    imagenes2();

    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (!file.type.startsWith('image/')) {
                continue
            }

            const img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
            preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

            const reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }

    function previewFile() {
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            // convert image file to base64 string
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }