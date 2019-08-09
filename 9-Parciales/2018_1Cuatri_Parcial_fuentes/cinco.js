function mostrar() {

    var planeta = prompt("Ingrese un planeta del sistema solar");

    switch (planeta) {
        case "venus":
        case "mercurio":
            console.log("acá hace mas calor");
            break

        case "tierra":
            console.log("aca vivimos");
            break

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            console.log("aca hace mas frío");
            break
    }

}
