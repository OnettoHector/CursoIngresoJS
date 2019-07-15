function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

        switch (mesDelAnio) {

            case "Febrero":
            {
                alert ("Este mes tiene 28 días");
                break
            }
            case "Abril":
            case "Junio":
            case "Septiembre":
            case "Noviembre":
            {
                alert ("Este mes tiene 30 días");
                break
            }
            default : //los defaults siempre van posicionados al final
            {
                alert ("Este mes tiene 31 días");
            }


        }






}//FIN DE LA FUNCIÓN