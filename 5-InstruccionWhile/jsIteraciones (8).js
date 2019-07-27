function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = "Si";

	while (respuesta == "Si") {
		contador = parseInt(prompt("Ingrese un numero"));

		if (contador > 0) {
			positivo = positivo + contador
			//console.log(positivo);
		}
		else {
			negativo = negativo * contador
			//console.log(negativo);
		}

		respuesta = prompt("Desea ingresar otro número? (Si/No)");
	}


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN