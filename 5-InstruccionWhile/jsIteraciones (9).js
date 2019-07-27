function mostrar() {

	var contador = 0;
	var numMax = -999999999999999
	var numMin = 999999999999999
	var numero = 0

	// declarar variables

	var respuesta = true;

	while (respuesta == true) {
		numero = parseInt(prompt("Ingrese un número"));

		if (numero > numMax) {
			numMax = numero;
		}

		if (numero < numMin) {
			numMin = numero;
		}

		respuesta = confirm("Desea ingresar otro número?");


	}



	document.getElementById("maximo").value = numMax
	document.getElementById("minimo").value = numMin





}//FIN DE LA FUNCIÓN