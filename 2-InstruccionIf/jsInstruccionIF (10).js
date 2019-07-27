function mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	var nota = Math.floor((Math.random() *10) +1)

	console.log (nota)

	if (nota >= 4 && nota <9) {
		alert ("Aprobó");
	}
	else if (nota == 9 || nota == 10) {
		alert ("Excelente");
	}
	else {
		alert ("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN