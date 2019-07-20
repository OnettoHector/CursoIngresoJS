function mostrar() 
{
	var contador=0;
	var contadorPositivos=0
	var contadorNegativos= 0
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var numero;
	//declarar contadores y variables

	var respuesta =true;
	while(respuesta==true)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if(numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else
		{
			contadorNegativos++
			contadorNegativos += numero;
			respuesta = confirm("Desea ingresar otro número?");
		}

			
		
		
	}

	
	document.write("Suma de positivos: " + acumuladorPositivos "<br>");
	document.write("Suma de negativos: " + acumuladorNegativos "<br>");
	document.write("Cantidad de positivos: " + contadorPositivos "<br>");
	document.write("Cantidad de negativos: " + contadorNegativos "<br>");
	



}//FIN DE LA FUNCIÓN