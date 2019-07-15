function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {
        case ("Febrero"):
            {
                alert("Este mes no tiene más de 29 días");
                break
            }
        default: //los defaults siempre van posicionados al final
            {
                alert("Este mes tiene 30 días o más");
            }

    }





}//FIN DE LA FUNCIÓN