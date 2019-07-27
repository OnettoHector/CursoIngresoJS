function mostrar() {

	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var contadorCero = 0
	var contadorPar = 0;
	var numeroPositivo = 0
	var numeroNegativo = 0

	//declarar contadores y variables 

	var respuesta = true;

	while (respuesta == true) {

		numero = parseInt(prompt("Ingrese un número"));

		if (numero > 0) {

			contadorPositivo++

			numeroPositivo = numero + numeroPositivo; //esto suma el numero ingresado + el valor que tenga num positivo en el intento

		}

		else if (numero < 0) {

			contadorNegativo++

			numeroNegativo = numero + numeroNegativo;
		}

		if (numero == 0) {

			contadorCero++
		}

		if (numero % 2 == 0) {

			contadorPar++
		}

		respuesta = confirm("Desea ingresar otro número?");

	}

	document.write("La suma de los positivos es: " + numeroPositivo + "<br>");
	document.write("La suma de los negativos es: " + numeroNegativo + "<br>");
	document.write("La cantidad de numeros positivos ingresados es: " + contadorPositivo + "<br>");
	document.write("La cantidad de numeros negativos ingresados es: " + contadorNegativo + "<br>");
	document.write("La cantidad de ceros ingresados es: " + contadorCero + "<br>");
	document.write("La cantidad de numeros pares ingresados es: " + contadorPar + "<br>");
	document.write("El promedio de los numeros positivos ingresados es: " + (numeroPositivo / contadorPositivo) + "<br>");
	document.write("El promedio de los numeros negativos ingresados es: " + (numeroNegativo / contadorNegativo) + "<br>");
	document.write("La diferencia entre los numeros positivos y negativos es: " + (numeroPositivo + numeroNegativo) + "<br>");







}//FIN DE LA FUNCIÓN