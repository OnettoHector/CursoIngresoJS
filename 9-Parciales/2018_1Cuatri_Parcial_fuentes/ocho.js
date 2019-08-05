function mostrar() {

    var letra
    var letraMax
    var letraMin
    var numero
    var contadorPares = 0
    var contadorImpares = 0
    var contadorCeros = 0
    var acumuladorPositivos = 0
    var acumuladorNegativos = 0
    var contadorPositivos = 0
    var bandera = 0
    var bandera2 = 0
    var numMax = 0
    var numMin = 0

    respuesta = true

    while (respuesta == true) {

        letra = prompt("Ingrese su letra");

        while (!isNaN(letra)) {
            letra = prompt("Solo LETRAS por favor");
        }

        numero = parseInt(prompt("Ingrese un número (-100 al 100)"));

        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseInt(prompt("Sólo numeros del -100 al 100"))
        }

        if (numero > numMax || bandera2 == 0) {
            numMax = numero
            letraMax = letra
        }

        if (numero < numMin || bandera == 0) {
            numMin = numero
            letraMin = letra
            bandera++
        }

        if (numero > 0) {
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++
        }

        if (numero < 0) {
            acumuladorNegativos = acumuladorNegativos + numero;
        }

        if (numero == 0) {
            contadorCeros++;
        }

        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }

        respuesta = confirm("Desea ingresar otra combinación?");

    }

    document.write("La cantidad de numeros pares son: " + contadorPares + "<br>");
    document.write("La cantidad de numeros impares son: " + contadorImpares + "<br>");
    document.write("La cantidad de ceros son: " + contadorCeros + "<br>");
    document.write("El promedio de los numeros positivos es: " + acumuladorPositivos / contadorPositivos + "<br>");
    document.write("La suma de los numeros negativos es: " + acumuladorNegativos + "<br>");
    document.write("El numero minimo y la letra minima son: " + numMin + " " + letraMin + "<br>");
    document.write("El numero maximo y la letra maxima son: " + numMax + " " + letraMax);

}
