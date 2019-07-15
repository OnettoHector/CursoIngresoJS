function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var examen

	examen = Math.floor((Math.random()*10) +1)

	if (examen >=9) {

		alert ("Excelente");
	}

		else if (examen >=4){

		alert ("Aprobo");
}

			else {
				alert ("Vamos, la próxima se puede")
			}

}//FIN DE LA FUNCIÓN