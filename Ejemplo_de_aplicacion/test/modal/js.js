function modal_registro_pais(argument) {
	let btn_cerrar_modal_registro_pais = document.querySelector(".btn_cerrar_modal_registro_pais");
	let modal_registro_paisl = document.querySelector(".modal_registro_paisl");
	modal_registro_paisl.style.display = "none";
	btn_cerrar_modal_registro_pais.addEventListener("click", function(argument) {
		modal_registro_paisl.style.display = "none";
	});
}

modal_registro_pais();