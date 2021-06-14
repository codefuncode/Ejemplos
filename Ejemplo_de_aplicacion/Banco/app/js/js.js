function navegacion(argument) {

	//  Variables para el menú interno de la sección de registros 

	//  Todos los contenedores  existentes en la pagina
	// con formularios  para trabajar o zona de despliegue de datos 

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

	let btn_registro_inicio =
		document.querySelector(
			".btn_registro_inicio"
		);

	for (var i = 0; i < contenedores.length; i++) {

		contenedores[i].style.display = "none";
	}

	let cuerpo = document.querySelector(".cuerpo");
	cuerpo.style.display = "block";

	btn_registro_inicio.addEventListener("click", function(argument) {
		for (var i = 0; i < contenedores.length; i++) {

			if (contenedores[i].classList.contains("registro_inicio")) {

				contenedores[i].style.display = "block";
				//  Llamada al afuncion ubucada en el fichero reguistro_pais.js
				registro_inicio();
			} else {
				contenedores[i].style.display = "none";
			}

		}
		console.log(contenedores);
	});

	btn_registro_Clinte.addEventListener("click", function(argument) {
		for (var i = 0; i < contenedores.length; i++) {

			if (contenedores[i].classList.contains("registro_clinte")) {

				contenedores[i].style.display = "block";
				//  Llamada al afuncion ubucada en el fichero reguistro_pais.js
				registro_clinte();
			} else {
				contenedores[i].style.display = "none";
			}

		}
		console.log(contenedores);
	});

	btn_registro_Pais.addEventListener("click", function(argument) {
		for (var i = 0; i < contenedores.length; i++) {

			if (contenedores[i].classList.contains("registro_pais")) {

				contenedores[i].style.display = "block";
				//  Llamada al función ubicada en el fichero reguistro_pais.js
				registro_pais();
			} else {
				contenedores[i].style.display = "none";
			}

		}
		console.log(contenedores);
	});

	btn_registro_Pueblo.addEventListener("click", function(argument) {
		for (var i = 0; i < contenedores.length; i++) {

			if (contenedores[i].classList.contains("registro_pueblo")) {

				contenedores[i].style.display = "block";
				//  Llamada al función ubicada en el fichero reguistro_pais.js
				registro_pueblo();
			} else {
				contenedores[i].style.display = "none";
			}

		}
		console.log(contenedores);
	});

	btn_registro_Agencia.addEventListener("click", function(argument) {
		for (var i = 0; i < contenedores.length; i++) {

			if (contenedores[i].classList.contains("registro_agencia")) {

				contenedores[i].style.display = "block";
				//  Llamada al función ubicada en el fichero reguistro_pais.js
				registro_agencia();
			} else {
				contenedores[i].style.display = "none";
			}

		}
		console.log(contenedores);
	});
}

navegacion();