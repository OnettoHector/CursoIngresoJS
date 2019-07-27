function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "Si";

	while (respuesta == "Si") {

		contador++
		acumulador = (acumulador + parseInt(prompt("Ingrese un número")))
		respuesta = prompt("Desea ingresar otro número? (Si/No)");

	}


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN
