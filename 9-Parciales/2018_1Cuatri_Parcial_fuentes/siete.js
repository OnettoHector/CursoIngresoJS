function mostrar() {
    var nota = 0
    var notaBaja = 0
    var sexo
    var sexoBajo
    var numero
    var varonesAprobados = 0

    for (contador = 0; contador < 5; contador++) {
        numero = parseInt(prompt("Ingrese un numero:"));
        while (isNaN(numero) || numero < 0 || numero > 10) {
            numero = parseInt(prompt("Ingrese un numero del 0 al 10 por favor;"));
        }
        nota = nota + numero

        sexo = prompt("Ingrese sexo (F o M)");
        while (sexo != "F" && sexo != "M") {
            sexo = prompt("Por favor, ingrese un sexo correcto")
        }

        if (numero < notaBaja || contador == 0) {
            notaBaja = numero;
            sexoBajo = sexo
        }

        if (numero >= 6 && sexo == "M") {
            varonesAprobados++
        }


    }
    console.log("El promedio de las notas es " + nota / contador);
    console.log("La nota y el sexo mas bajo son: " + notaBaja + " " + sexoBajo);
    console.log("Cantidad de varones aprobados: " + varonesAprobados);





}