function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {
        case "Julio":
        case "Agosto":
            {
                alert("Abrigate que hace frio");
                break;
            }
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            {
                alert("Ya pasamos el invierno");
                break;
            }
        default: //los defaults siempre van posicionados al final
            {
                alert("Falta para el invierno");
            }
    }

}//FIN DE LA FUNCIÓN