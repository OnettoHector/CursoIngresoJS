function mostrar() {

    var nota
    var sexo
    var sumaNotas = 0
    var notaBaja
    var varonSeis = 0

    for (contador = 0; contador < 5; contador++) {

        nota = parseInt(prompt("Ingrese su nota (0-10)"));

        while (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Numero incorrecto");
            nota = parseInt(prompt("Por favor, una nota del 0 al 10"));
        }

        sumaNotas = nota + sumaNotas

        sexo = prompt("Ingrese su sexo (F o M)");

        while (sexo != "F" && sexo != "M") {
            alert("No es un sexo valido");
            sexo = prompt("Ingrese su sexo (F o M)");
        }

        if (contador == 0 || nota < notaBaja) {
            notaBaja = nota
            sexoBajo = sexo
        }

        if (nota >= 6 && sexo == "M") {
            varonSeis++
        }
    }

    console.log(sumaNotas / 5);
    console.log(notaBaja + sexoBajo);
    console.log(varonSeis);



}