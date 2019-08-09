function mostrar() {

    var numeroUno = parseInt(prompt("Ingrese el primer numero"));
    var numeroDos = parseInt(prompt("Ingrese el segundo numero"));
    var resultadoSuma = 0

    if (numeroUno == numeroDos) {
        console.log(numeroUno + " " + numeroDos);
    }
    else if (numeroUno > numeroDos) {
        console.log(numeroUno - numeroDos);
    }
    else {
        console.log(numeroUno + numeroDos);
        resultadoSuma = numeroUno + numeroDos;
    }
    if (resultadoSuma > 10) {
        console.log("La suma es " + resultadoSuma + " y supero el 10");
    }



}
