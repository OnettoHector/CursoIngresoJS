function mostrar() {

	var contador = 0;
	var acumulador = 0;

	while (acumulador < 5) {
		acumulador++;
		contador = (contador + parseInt(prompt("Ingrese un número:")));
	}

	document.getElementById('suma').value = contador;
	document.getElementById('promedio').value = contador / 5;

}//FIN DE LA FUNCIÓN