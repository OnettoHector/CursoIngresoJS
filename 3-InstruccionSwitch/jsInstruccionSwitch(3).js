function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById("mes").value;

    switch (mesDelAnio) {
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            {
                alert("Este mes tiene 30 o más días");
                break;
            }
        case "Febrero":
            {
                alert("Este mes no tiene más de 29 días");
                break;
            }


    }






}//FIN DE LA FUNCIÓN