function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            {
                alert("Falta para el invierno");
                break
            }
        case "Julio":
        case "Agosto":
            {
                alert("Abrigate que hace frío!");
                break;
            }
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            {
                alert("Ya pasamos el frío, ahora calor!");
                break;
            }

    }




}//FIN DE LA FUNCIÓN