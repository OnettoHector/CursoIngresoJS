function mostrar() {

    var sexo = prompt("ingrese F o M:");

    while (sexo != "F" && sexo != "M") {
        alert("Valor incorrecto");
        sexo = prompt("Ingrese F o M");
    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN