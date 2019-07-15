function mostrar() {
    //tomo la edad  

    var edad

    edad = document.getElementById("edad").value

    if (edad <= 12 || edad >= 18) {

        alert("Usted no es un adolescente");
    
    }
        else {

            alert("Usted es un adolescente")

        }

    }//FIN DE LA FUNCIÓN