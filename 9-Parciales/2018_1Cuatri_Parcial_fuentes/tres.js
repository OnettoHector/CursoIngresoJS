function mostrar() {
    var precio = prompt("Ingrese el precio");
    var descuento = prompt ("Ingrese el % de descuento");
    var elPrecioFinal = (precio - precio * descuento /100);

    document.getElementById("elPrecioFinal").value = elPrecioFinal;

}
