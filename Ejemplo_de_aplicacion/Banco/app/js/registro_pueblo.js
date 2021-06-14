function registro_pueblo(argument) {
	console.log("ok");

	let seleccion_pais =
		document.querySelector(
			".registro_pueblo [name='seleccion_pais']"
		);

	seleccion_pais.innerHTML = "";
	console.log(seleccion_pais);
	let opcion_por_defecto = document.createElement("OPTION");
	opcion_por_defecto.value = "inicial";

	opcion_por_defecto.innerHTML = "Selecciona un país";
	opcion_por_defecto.selected = true;
	seleccion_pais.appendChild(opcion_por_defecto);

	optener_paises();

	// btn_regustrar.addEventListener(
	//   "click",
	//   function(argument) {

	//       let url =
	//           "php/registro_pais.php";

	//       let data = {
	//           "nombre_pais": nombre_pais.value
	//       };

	//       $.post(url, data, function(data) {

	//           console.log(data);

	//       });
	//   });

	function optener_paises(argument) {

		let url =
			"php/optener_paises.php";

		let data = {
			"func": "todo"
		};

		$.post(url, data, function(data) {
			let datos = JSON.parse(data);
			console.log(datos);

			if (datos.respuesta == "si") {

				let data_pueblos = JSON.parse(JSON.stringify(datos.datos));

				console.log(data_pueblos);
				let opciones = [];
				for (var i = data_pueblos.length - 1; i >= 0; i--) {
					opciones.push(document.createElement("OPTION"));
				}
				console.log(opciones);

				for (var i = 0; i < data_pueblos.length; i++) {

					opciones[i].value = data_pueblos[i]["id_pais"];
					opciones[i].innerHTML = data_pueblos[i]["nombre_pais"];

					console.log(data_pueblos[i]["id_pais"]);
					console.log(data_pueblos[i]["nombre_pais"]);
					console.log("===============================");

				}

				for (var i = opciones.length - 1; i >= 0; i--) {
					seleccion_pais.appendChild(opciones[i]);
				}

			} else {
				console.log(datos.respuesta);
			}

		});
	}

}