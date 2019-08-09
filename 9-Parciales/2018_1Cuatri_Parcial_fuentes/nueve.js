function mostrar() {

    var marca
    var marcaPesada
    var peso
    var pesoTotal = 0
    var pesoMaximo
    var pesoMinimo
    var temperatura
    var temperaturaPar = 0
    var temperaturaFria = 0
    var contador = 0
    var promedio
    var continuar = true

    while (continuar == true) {

        marca = prompt("Ingrese la marca del producto");

        while (!isNaN(marca)) {
            alert("Marca incorrecta");
            marca = prompt("Ingrese una marca correcta");
        }

        peso = parseInt(prompt("Ingrese el peso (1-100)"));
        pesoTotal = peso + pesoTotal;

        while (isNaN(peso) || peso < 1 || peso > 100) {
            alert("Peso no valido");
            peso = parseInt(prompt("Ingrese un peso entre 1 y 100"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura (-30 a 30)"));

        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            alert("Temperatura no valida");
            temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30"));
        }

        if (temperatura % 2 == 0) {
            temperaturaPar++
        }
        if (contador == 0 || peso > pesoMaximo) {
            pesoMaximo = peso
            marcaPesada = marca
        }
        if (contador == 0 || peso < pesoMinimo) {
            pesoMinimo = peso
        }
        if (temperatura < 0) {
            temperaturaFria++
        }

        contador++

        continuar = confirm("Desea continuar?");

    }

    console.log("Cantidad temperaturas pares es " + temperaturaPar);
    console.log("La marca del producto mas pesado es " + marcaPesada);
    console.log("La cantidad de productos que se conservan a menos de 0 grados son: " + temperaturaFria);
    console.log("El promedio del peso de los productos es: " + pesoTotal / contador)
    console.log("El peso maximo es: " + pesoMaximo);
    console.log("El peso minimo es: " + pesoMinimo);
}
