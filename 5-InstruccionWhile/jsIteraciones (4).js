function mostrar() {

	var numeroPedido = prompt("Ingrese un número (0-9): ");

	while (isNaN(numeroPedido) || numeroPedido < 0 || numeroPedido > 9) {
		alert("Su habilidad para seguir instrucciones simples deja mucho que desear.");
		numeroPedido = prompt("Ingrese un numero del 0 al 9 POR FAVOR: ")
	}

	document.getElementById("Numero").value = numeroPedido


}//FIN DE LA FUNCIÓN